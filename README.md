# EstudaAi — Etapa 1: login e cadastro

Interface em Next.js, TypeScript e Tailwind CSS, recriada em componentes a partir das referências fornecidas. Os screenshots originais não fazem parte do site. Logotipo, campos, botões, ícones, textos e composição são elementos independentes. A paisagem é uma nova imagem produzida para este projeto.

## O que está pronto

- `/login`: formulário, mostrar/ocultar senha, checkbox e links de navegação.
- `/cadastro`: validação de nome, e-mails iguais, senhas iguais e regra de senha; etapas de prévia de perfil e conclusão.
- Layout adaptável: duas colunas no desktop e foco no formulário no celular.
- Acessibilidade: labels, foco de teclado, mensagens de erro e modal nativo com fechamento por Escape.
- Dockerfile para Coolify e build standalone.

## Limites desta entrega

Esta etapa é uma interface navegável. Nenhuma conta é criada e nenhuma senha é enviada ou gravada. Login, recuperação e provedores Google/Discord/GitHub mostram uma mensagem explicativa. O checkbox de 30 dias não cria sessão. PostgreSQL/Prisma ainda não estão instalados nem conectados. As etapas Perfil e Pronto são propostas de fluxo; não havia referências visuais específicas para elas.

Os números de estudantes, grupos, planos e recomendações, assim como a mensagem de criptografia, foram transcritos da referência visual: não representam métricas verificadas nem garantias de um backend implementado. Validar/substituir essas mensagens antes de abrir o serviço ao público. Termos e política ainda precisam de conteúdo real.

A paisagem é semelhante, não idêntica, à referência. No celular, o painel fotográfico é ocultado para facilitar o preenchimento.

## 1. Abrir no computador

Instale Node.js 22 LTS e Git. Extraia o ZIP e abra a pasta `estudaai` no VS Code. Em Terminal > Novo Terminal, execute:

```bash
npm ci
npm run dev
```

Abra `http://localhost:3000/login` ou `http://localhost:3000/cadastro`. Use Ctrl+C para parar o servidor. Se o PowerShell bloquear `npm.ps1`, escolha o terminal Prompt de Comando no VS Code ou execute `npm.cmd` em lugar de `npm`.

## 2. Conferir

```bash
npm run typecheck
npm run build
```

Confira também no navegador: navegação entre páginas; mostrar e ocultar senha; e-mails diferentes; senhas diferentes; senha curta; retorno da etapa Perfil; funcionamento em janela estreita. Use dados fictícios para a prévia, por exemplo `Pessoa Teste`, `teste@example.com` e uma senha de teste.

O build standalone é consumido pelo Dockerfile. Para desenvolvimento use `npm run dev`.

Validação nesta entrega: build de produção concluído com sucesso, incluindo a verificação de TypeScript. Não foi realizada comparação visual automatizada em navegador; confira a fidelidade das duas páginas localmente. As fontes Manrope e Caveat são servidas junto com o projeto, sem depender do Google Fonts.

## 3. Criar o repositório no GitHub

1. Entre na sua conta do GitHub e escolha **New repository**.
2. Nome: `estudaai`.
3. Selecione **Private**.
4. Deixe README, .gitignore e licença sem inicialização: eles serão enviados do computador.
5. Clique em **Create repository** e copie a URL HTTPS exibida.

[Documentação do GitHub](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository).

## 4. Criar os primeiros commits e enviar

Execute dentro da pasta que contém `package.json`:

```bash
git init
git branch -M main
git add package.json package-lock.json tsconfig.json next-env.d.ts next.config.ts postcss.config.mjs .gitignore .env.example
git commit -m "chore: inicia projeto Next.js com TypeScript e Tailwind"
git add app components public
git commit -m "feat: recria telas de login e cadastro do EstudaAi"
git add Dockerfile .dockerignore README.md
git commit -m "docs: adiciona guia e configuracao Docker para Coolify"
```

Se o Git pedir identificação, configure seu nome e e-mail localmente e repita o commit que falhou:

```bash
git config user.name "Maycon Sousa"
git config user.email "SEU_EMAIL_DO_GITHUB"
```

Troque `SEU_USUARIO` abaixo pelo seu usuário real antes de executar:

```bash
git remote add origin https://github.com/SEU_USUARIO/estudaai.git
git push -u origin main
```

Se aparecer uma janela de autenticação do GitHub, conclua o login. Não coloque token na URL nem compartilhe credenciais no chat. O ZIP não contém histórico Git: os três commits acima serão criados no seu computador.

## 5. Publicar a prévia no Coolify

1. Abra seu projeto/ambiente no Coolify e adicione uma aplicação a partir do GitHub.
2. Para um repositório privado, conecte a integração GitHub App e conceda acesso ao repositório `estudaai`.
3. Selecione `estudaai`, branch `main`, diretório base `/`.
4. Escolha o build pack **Dockerfile**, caminho `/Dockerfile`.
5. Configure a porta interna da aplicação como **3000**.
6. Atribua o domínio/subdomínio desejado e confira o apontamento DNS para sua VPS.
7. Salve e clique em **Deploy**. Aguarde o build terminar e abra o domínio em `/login`.

Nenhuma variável de banco é necessária nesta etapa. A aplicação roda como usuário sem privilégios no contêiner. O Dockerfile está preparado, mas não foi executado nesta sessão e a publicação na sua VPS ainda não foi feita.

Referências: [Dockerfile no Coolify](https://coolify.io/docs/applications/builds/dockerfile) e [saída standalone do Next.js](https://nextjs.org/docs/app/api-reference/config/next-config-js/output).

## 6. Atualizações futuras

Depois de cada etapa, execute os comandos de validação e confira as mudanças:

```bash
npm run build
git status
git add .
git commit -m "feat: descreva a funcionalidade desta etapa"
git push
```

Se o deploy automático estiver configurado, o Coolify inicia uma nova publicação; caso contrário, use **Deploy** no painel.

## Arquivos principais

- `components/auth-screen.tsx`: componentes, formulários e fluxo da prévia.
- `app/globals.css`: visual e adaptação para diferentes telas.
- `app/login/page.tsx` e `app/cadastro/page.tsx`: páginas.
- `public/mountain-sunrise.png`: nova paisagem de fundo.
- `Dockerfile`: empacotamento de produção.

## Próxima etapa

Conferir as telas com você e então conectar PostgreSQL + Prisma, cadastro real, hash de senha, sessões seguras, recuperação por e-mail e provedores escolhidos. As demais páginas serão implementadas a partir das próximas imagens.

## Origem da paisagem

Gerada com a ferramenta integrada de imagens. Prompt: "Photorealistic vertical 4:5 mountain sunrise; lone young backpacked hiker seated lower right facing misty forested mountains and lake; amber sun at right horizon, dark teal blue sky and generous upper-left copy space; no text, UI, logos, or watermark."
