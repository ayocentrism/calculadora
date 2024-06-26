function calcularImporteCobrar() {
  const saldoObjetivo = parseFloat(document.getElementById('saldo-objetivo').value);
  const saldoActual = parseFloat(document.getElementById('saldo-actual').value);

  const importeCobrar = saldoActual - saldoObjetivo;

  document.getElementById('importe-cobrar').value = importeCobrar.toFixed(2);
}

