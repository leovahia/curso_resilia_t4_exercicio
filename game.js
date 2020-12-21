
function start(){
    let name = document.getElementById('firstName').value;
    let option = prompt("Prezado, "+ name +". Somos a equipe que compões o Programa de Desenvolvimento de Software do Ministério da Saúde de Outland agradecemos sua presença aqui e desejamos uma ótima gestão para você. Os cientistas responsáveis pelo desenvolvimento da vacina nos apresentaram duas alternativas de estudos: i) fármacos já conhecidos com possíveis ações antivirais e ii) o desenvolvimento da vacina a base de partícula viral atenuado ou morta. Ambas estão em fase inicial de teste e temos 8 meses e recurso limitado para investir, pois a maior parte dos recursos estão sendo destinado na construção de hospitais e insumos para os doentes. Por isso é preciso decidir qual das duas linhas devemos seguir. Com base nos seus conhecimentos de tecnologia da programação qual deles devemos iniciar? (Digite Fármaco ou Vacina)");
    
    if(option == "Fármaco"){
        let option02 = prompt("Passados 5 meses, o técnico responsável e desenvolvimento entre para você um relatório apresentando alguns princípios ativos possíveis para serem usados nos testes em laboratório. Curiosamente, um representante de uma indústria farmacêutica se encontra na sua sala para uma conversa pessoal. O representante argumenta que sabe do resultado do seu estudo e propõe por um valor considerável de dinheiro que você noticie que o fármaco dele serve para o tratamento da doença sem a necessidade de mais testes. Você pretende acatar essa sugestão? Embora você saiba que está cedo demais para tomar qualquer decisão, visto que existe um protocolo a seguir para construção de qualquer fármaco. OBS: Todo fármaco precisa passar por pelo menos 3 fases, sendo a 1° fase laboratorial, 2° fase experimentação em animais e 3° fase experimentação em humanos. (Digite Sim ou não)");
        drug(option02);
    }else if (option == "Vacina"){
        let option03 = prompt("Passados 3 meses sua equipe aponta para duas possíveis vias de ação contra uma proteína do vírus que os cientistas gostariam de atacar. Porém os recursos são escassos e segundo os estudos que sua equipe demonstrou que a primeira via de ação custará o dobro para ser feita devido ao grau de inovação, porém demorará menos tempo (4 meses), já a segunda custará menos por ser um método mais convencional, mas demorará mais que 7 meses. Dessa forma qual das duas vias você optará? Lembrando que o tempo máximo de desenvolvimento é de 8 meses e você já gastou 3 meses. (Digite 1 ou 2)");
        vaccine(option03);
    }else{
        alert("Opção errada.");
       
    }
}

function drug(option02){
    if(option02 == "Sim"){
        alert("Você aceita o valor. Em poucas semanas o fármaco e 3 meses depois dados científicos são publicados demonstrando que o fármaco é ineficiente para o tratamento. O governo publica sua demissão e você é preso e 'press F'. FIM!!!");
       
    }else if(option02 == "Não"){
        alert("O representando do farmacêutica vai embora chateado com você. Passados 3 meses os dados científicos demonstraram que o fármaco é ineficaz para a curar 100% dos pacientes. No entanto, outros dados mostraram que o fármaco aprontado pelo seu programa poderia ser usado no tratamento em casos graves enquanto a vacina não chega. Por isso, a fabricação e venda seria aceita apenas para os 5% da população com casos graves. Embora não fosse o objetivo inicial do Governo, o valor recolhido no investimento desse fármaco servirá para pagar os custos gastos até o momento. Logo, você continuará trabalhando no departamento do Ministério e receberá uma medalha pelo esforço. FIM!!!");
        
    }else{
        alert("Opção errada.");
        
    }
}

function vaccine(option03){
    if(option03 == 1){
        alert("Passados 7 meses a vacina passa por todas as etapas e começa sua comercialização. O Governo ganha uma grande quantidade de dinheiro, o que permitiu recuperar todo o investimento aplicado no desenvolvimento e ainda obteve lucro. Você é condecorado com uma medalha, mas a felicidade dura pouco, porque passado 1 meses o número de pessoas com sequelas, alergias provenientes da vacina é alto e todas as outras nações exigem ressarcimento pela compra da vacina, fazendo com que o Governo de Outland entre em crise. Naturalmente o Presidente do país manda prender você e 'Press F'.");
        
    }else if(option03 == 2){
        alert("O Governo não concorda com a demora, mas você apresenta bons argumentos e ele permite que termine o projeto com uma condição de ser preso por não cumprir sua tarefa dentro do tempo combinado. Mas sua decisão não foi em vão, porque de fato o método proposto por você, embora mais longo, permitiu construir uma vacina mais segura e mais eficaz e assim garantiu a sobrevivência da população mundial. O Governo de Outland se tornou o país mais rico do planeta com a venda da vacina e a população viveu feliz até a próxima pandemia. FIM!!!");
    }else{
        
    }
}

