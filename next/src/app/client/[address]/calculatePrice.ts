export function calculatePrice(amount: number, tax: number, energyCost: number, remainingCapacity: number) {
    let price; //Valor a ser pago
    if (remainingCapacity >= amount) {
      price = amount * energyCost;
      remainingCapacity -= amount; //precisa mandar isso para o banco de dados tb
    } else {
      price = remainingCapacity * energyCost;
      amount -= remainingCapacity;
      price +=
        amount * energyCost + amount * energyCost * (tax / 100);
      remainingCapacity = 0; //atualizar no banco de dados
    }
    return price;
  }