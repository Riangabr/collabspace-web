function maskTelephone(telephone: string): string {
  const telephoneNumber = telephone.replace(/\D/g, "");

  if (telephoneNumber.length !== 11) return telephoneNumber;

  const telephoneFormated = `(${telephoneNumber.substring(
    0,
    2,
  )}) ${telephoneNumber.substring(2, 3)}${telephoneNumber.substring(
    3,
    7,
  )}-${telephoneNumber.substring(7)}`;

  return telephoneFormated;
}

function maskCep(cep: string): string {
  const cepNumber = cep.replace(/\D/g, "");

  if (cepNumber.length !== 11) return cepNumber;

  const cepFormated = `(${cepNumber.substring(0, 5)}-${cepNumber.substring(
    5,
  )})`;

  return cepFormated;
}

export { maskTelephone, maskCep };
