function formatarNome(nome) {
    return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
}

function criarTabela() {
    var alunos = [];
    var aluno;

    do {
        var nome = prompt("Digite o nome do aluno");
        var nota1 = parseFloat(prompt("Digite a nota do primeiro semestre"));
        var nota2 = parseFloat(prompt("Digite a nota do segundo semestre"));
        var frequencia = parseFloat(prompt("Digite a frequência do aluno (em porcentagem)"));

        aluno = {
            nome: formatarNome(nome),
            nota1: nota1.toFixed(2),
            nota2: nota2.toFixed(2),
            frequencia: frequencia.toFixed(2)
        };
        alunos.push(aluno);
        var continuar = confirm("Deseja continuar?");
    } while (continuar);

    var tabela = "<table>";
    tabela += "<tr><th>Nome</th><th>Nota1</th><th>Nota2</th><th>Frequência (%)</th></tr>";

    for (var i = 0; i < alunos.length; i++) {
        var aluno = alunos[i];
        var media = (parseFloat(aluno.nota1) + parseFloat(aluno.nota2)) / 2;

        tabela += "<tr";
        tabela += media >= 6 && aluno.frequencia >= 75 ? " class='aprovado'" : " class='reprovado'";
        tabela += ">";
        tabela += "<td>" + aluno.nome + "</td>";
        tabela += "<td>" + aluno.nota1 + "</td>";
        tabela += "<td>" + aluno.nota2 + "</td>";
        tabela += "<td>" + aluno.frequencia + "</td>";
        tabela += "</tr>";
    }
    tabela += "</table>";
    document.getElementById("tabelaAlunos").innerHTML = tabela;
}
