export async function fetchData(url?: string) {
  try {
    const response = await fetch(url ? `/api/${url}` : '/api')
    return await response.json();
  } catch (e: any) {
    throw Error(e.message);
  }
}