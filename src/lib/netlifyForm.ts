type SubmitNetlifyFormArgs = {
  form: HTMLFormElement;
  endpoint?: string;
  fullName?: {
    firstField: string;
    lastField: string;
    targetField: string;
  };
};

export async function submitNetlifyForm({
  form,
  endpoint = "/",
  fullName,
}: SubmitNetlifyFormArgs) {
  const formData = new FormData(form);

  if (fullName) {
    const first = String(formData.get(fullName.firstField) ?? "").trim();
    const last = String(formData.get(fullName.lastField) ?? "").trim();
    formData.set(fullName.targetField, `${first} ${last}`.trim());
  }

  const encoded = new URLSearchParams();

  formData.forEach((value, key) => {
    encoded.append(key, String(value));
  });

  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: encoded.toString(),
  });
}