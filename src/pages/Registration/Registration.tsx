import { type ChangeEvent } from 'react';
import { StepOne } from '../../widgets/Registration/StepOne';
import { StepTwoUI } from '../../widgets/Registration/StepTwo';
import { StepThree } from '../../widgets/Registration/StepThree/StepThree';
import type RegistrationProps from './type';
import styles from './Registration.module.scss';
import { ReviewModalUI } from '../../shared/ui/ReviewModal/ReviewModal';
import { createCitiesOption } from '../../shared/lib/RegistrationUtils/createCitiesOption';
import { createCategoriesOption } from '../../shared/lib/RegistrationUtils/createCategoriesOption';
import { createCategoriesOneOption } from '../../shared/lib/RegistrationUtils/createCategoriesOneOption';

export const Registration: React.FC<RegistrationProps> = (
	props: RegistrationProps
) => {
	const {
		onChangeValueInStepOne,
		onChangeValueInStepTwo,
		onChangeValueInStepThree,
		stepThreeData,
		stepTwoData,
		utilsData,
		onNextStep,
		onPrevStep,
		step,
	} = props;

	const onNextAfterOne = (email: string, password: string) => {
		onChangeValueInStepOne('email', email);
		onChangeValueInStepOne('password', password);
		onNextStep();
	};

	return (
		<section className={styles.registration}>
			{step === 1 && (
				<StepOne
					onNext={onNextAfterOne}
					onAppleAuth={() => {}}
					onGoogleAuth={() => {}}
				/>
			)}
			{step === 2 && (
				<StepTwoUI
					user={stepTwoData.user}
					isEnabled={stepTwoData.isActiveButtonNext}
					city={createCitiesOption(utilsData.cities)}
					gender={[
						{ value: 'male', text: 'Мужской' },
						{ value: 'female', text: 'Женский' },
						{ value: 'ZVZVZVZV', text: 'Не указан' },
					]}
					category={createCategoriesOption(
						stepTwoData.user.wantsToLearnCat,
						utilsData.categories
					)}
					subCategory={createCategoriesOption(
						stepTwoData.user.wantsToLearnSubCat,
						utilsData.subcategories
					)}
					onAddPhoto={() => onChangeValueInStepTwo('photo', '')}
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
					onInputDate={(date: Date) => onChangeValueInStepTwo('date', date)}
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
					categories={createCategoriesOneOption(utilsData.categories)}
					subcategories={createCategoriesOneOption(utilsData.subcategories)}
					selectedCategoryText={stepThreeData.selectedCategoryText}
					selectedSubcategoryText={stepThreeData.selectedSubcategoryText}
					onSelectCategory={(value: string) =>
						onChangeValueInStepThree('category', value)
					}
					onSelectSubcategory={(value: string) =>
						onChangeValueInStepThree('subcategory', value)
					}
					isDisabledSubmitForm={!stepThreeData.isActiveButtonNext}
					skillName={stepThreeData.skillName}
					skillDescription={stepThreeData.skillDescription}
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
				/>
			)}
			{step === 4 && (
				<ReviewModalUI
					data={{
						title: stepThreeData.skillName,
						category: stepThreeData.selectedCategoryText,
						subcategory: stepThreeData.selectedSubcategoryText,
						description: stepThreeData.skillDescription,
						images: stepThreeData.images,
					}}
					onSave={onNextStep}
					onClose={onPrevStep}
				/>
			)}
		</section>
	);
};
