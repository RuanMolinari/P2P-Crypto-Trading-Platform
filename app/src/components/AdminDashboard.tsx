import React from 'react';

const AdminDashboard = () => {
  const lucroHoje = 4.21;
  const lucroMes = 121.89;
  const transacoes = 42;

  const gerarRelatorio = () => {
    const csv = `data:text/csv;charset=utf-8,Data,Lucro\nHoje,${lucroHoje}\nMês,${lucroMes}`;
    const encoded = encodeURI(csv);
    const link = document.createElement('a');
    link.setAttribute('href', encoded);
    link.setAttribute('download', 'relatorio_lucros.csv');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div>
      <h2>Painel Administrativo</h2>
      <p>Lucro de hoje: ${lucroHoje}</p>
      <p>Lucro do mês: ${lucroMes}</p>
      <p>Total de transações: {transacoes}</p>
      <button onClick={gerarRelatorio}>Baixar Relatório</button>
    </div>
  );
};

export default AdminDashboard;
