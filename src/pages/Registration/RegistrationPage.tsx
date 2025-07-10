import { type ChangeEvent } from 'react';
import { StepOne } from '../../widgets/Registration/StepOne';
import { StepTwoUI } from '../../widgets/Registration/StepTwo';
import { StepThree } from '../../widgets/Registration/StepThree/StepThree';
import type RegistrationProps from './type';
import { ReviewModalUI } from '../../shared/ui/ReviewModal/ReviewModal';
import { ModalWithContentUI } from '../../shared/ui';

export const RegistrationPage: React.FC<RegistrationProps> = (
	props: RegistrationProps
) => {
	const {
		onChangeValueInStepOne,
		onChangeValueInStepTwo,
		onChangeValueInStepThree,
		user,
		skillDescription,
		skillName,
		selectedCategoryText,
		selectedSubcategoryText,
		images,
		isDoneStepThree,
		isDoneStepTwo,
		utilsData,
		onNextStep,
		onPrevStep,
		step,
	} = props;

	const onNextAfterOne = (email: string, password: string) => {
		onChangeValueInStepOne('email&password', { email, password });
		onNextStep();
	};

	const onChangePhoto = async (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const files: File[] = Array.from(e.target.files);
			onChangeValueInStepTwo('photo', files);
		}
	};

	return (
		<section>
			{step === 1 && (
				<StepOne
					onNext={onNextAfterOne}
					onAppleAuth={() => {}}
					onGoogleAuth={() => {}}
				/>
			)}
			{step === 2 && (
				<StepTwoUI
					user={user}
					isEnabled={isDoneStepTwo !== undefined ? isDoneStepTwo : true}
					city={utilsData.cities}
					gender={[
						{ value: 'Мужской', text: 'Мужской' },
						{ value: 'Женский', text: 'Женский' },
						{ value: 'Не указан', text: 'Не указан' },
					]}
					category={utilsData.categories}
					subCategory={utilsData.subcategories}
					handleFileChange={onChangePhoto}
					onBack={onPrevStep}
					onChange={(e: ChangeEvent) =>
						onChangeValueInStepTwo(
							'userName',
							(e.target as HTMLInputElement).value
						)
					}
					onClearCity={() => onChangeValueInStepTwo('city', '')}
					onInputChangeCity={(e: ChangeEvent) =>
						onChangeValueInStepTwo('city', (e.target as HTMLInputElement).value)
					}
					onSelectCity={(value: string) =>
						onChangeValueInStepTwo('city', value)
					}
					onSelectGender={(value: string) =>
						onChangeValueInStepTwo('gender', value)
					}
					onInputDate={(date: Date) =>
						onChangeValueInStepTwo('date', date.toLocaleDateString())
					}
					onSelectCategory={(value: string) =>
						onChangeValueInStepTwo('category', value)
					}
					onSelectSubCategory={(value: string) =>
						onChangeValueInStepTwo('subcategory', value)
					}
					onNext={onNextStep}
				/>
			)}
			{step === 3 && (
				<StepThree
					categories={utilsData.categories}
					subcategories={utilsData.subcategories}
					selectedCategoryText={selectedCategoryText}
					selectedSubcategoryText={selectedSubcategoryText}
					onSelectCategory={(value: string) =>
						onChangeValueInStepThree('category', value)
					}
					onSelectSubcategory={(value: string) =>
						onChangeValueInStepThree('subcategory', value)
					}
					isDisabledSubmitForm={
						isDoneStepThree !== undefined ? !isDoneStepThree : false
					}
					skillName={skillName}
					skillDescription={skillDescription}
					onChangeSkillName={(e: ChangeEvent) =>
						onChangeValueInStepThree(
							'skillName',
							(e.target as HTMLInputElement).value
						)
					}
					onChangeSkillDescription={(e: ChangeEvent) =>
						onChangeValueInStepThree(
							'skillDescription',
							(e.target as HTMLInputElement).value
						)
					}
					onSubmit={onNextStep}
					onBack={onPrevStep}
					onChangeFiles={(files: File[]) =>
						onChangeValueInStepThree('images', files)
					}
				/>
			)}
			{step === 4 && (
				<ReviewModalUI
					data={{
						title: skillName,
						category: selectedCategoryText,
						subcategory: selectedSubcategoryText,
						description: skillDescription,
						images,
					}}
					onSave={onNextStep}
					onClose={onPrevStep}
					onEdit={onPrevStep}
				/>
			)}
			{step === 5 && (
				<ModalWithContentUI
					title='Ваше предложение создано
'
					subtitle='Теперь вы можете предложить обмен'
					onClose={onNextStep}
					icon='src/images/icons/Done.svg'
				/>
			)}
		</section>
	);
};
