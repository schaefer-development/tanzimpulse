import { GRAPHCMS_ENDPOINT, GRAPHCMS_API_TOKEN } from '$lib/env';

export async function api(query: string, variables?: Record<string, unknown>) {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };
  if (GRAPHCMS_API_TOKEN) headers['Authorization'] = `Bearer ${GRAPHCMS_API_TOKEN}`;
  const res = await fetch(GRAPHCMS_ENDPOINT, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables
    })
  });

  const { status, ok } = res;
  const body = await res.json();
  const { errors } = body;
  if (errors?.length) {
    return {
      ok: false,
      status: 500,
      body: { errors }
    };
  }

  return {
    status,
    ok,
    body
  };
}
