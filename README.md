# ControleDespesas

O projeto foi construído usando springboot, para execução no container do tomcat, foram realizados os seguintes passo:

    Mudança do <packaging> do pom.xml de jar para war
    Execução do goal mvn clean package
    Deploy do WAR gerado na pasta webapps do tomcat

O WAR gerado se encontra disponível na pasta /target;

O contexto padrão da aplicação é /ControleDespesasApp (nome do WAR) e a porta configurada é 8080;

Os detalhes da configuração de banco se encontram no arquivo application.yml
