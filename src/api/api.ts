const URL = import.meta.env.VITE_API_URL;

export const getUsersApi = async () => {
	const response = await fetch(`${URL}/api/users`);

	if (!response.ok) {
		throw new Error(`Error: ${response.status}`);
	}

	const data = response.json();
	return data;
};
