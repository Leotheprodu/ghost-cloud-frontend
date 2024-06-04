export async function fetchAPI<T>({
  url,
  method = 'GET',
  body = null,
  isFormData = false,
}: {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: T | FormData | null;
  isFormData?: boolean;
}) {
  // eslint-disable-next-line no-undef
  const config: RequestInit = {
    method,
    credentials: 'include',
    body:
      method === 'GET' || method === 'DELETE' || method === 'PATCH'
        ? undefined
        : isFormData
        ? (body as FormData)
        : JSON.stringify(body),
    headers: isFormData ? undefined : { 'Content-Type': 'application/json' },
  };
  try {
    const response = await fetch(`${url}`, config);
    const data = await response.json();

    if (response.status >= 200 && response.status < 300) {
      return data;
    } else {
      const error = data.message || 'Unknown error occurred';
      throw new Error(error);
    }
  } catch (error) {
    throw new Error('Error occurred while fetching data');
  }
}
