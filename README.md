# backend-gobarber

## Passos para iniciar a aplicação
  1. yarn install;
  2. Crie o arquivo .env e preencha de acordo com o .env.example, é preciso do banco de dados postgres, mongodb, 
redis, servidor de e-mail(Testei utilizando o Mailtrap https://mailtrap.io/), e precisa de DSN do sentry (https://sentry.io/);
  3. yarn dev ( inicializar o servidor principal da aplicação );
  4. yarn queue ( inicializar o servidor de jobs que faz o envio de email );

**Existe um JSON na pasta insomnia que contém um arquivo que pode ser importado no insomnia e utilizado para testar os 
endpoints da API 
