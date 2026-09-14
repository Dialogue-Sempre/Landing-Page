# Branch CMS — editor

Repo fixo: [Dialogue-Sempre/Landing-Page](https://github.com/Dialogue-Sempre/Landing-Page.git)  
Branch de conteúdo: `CMS` (em `src/data/cms.json`).

## Repo público ≠ escrita sem login

- **Ler** arquivos públicos: sem token.
- **Gravar / commit** via API: o GitHub **sempre** exige autenticação, mesmo em repo público. Sem isso qualquer pessoa apagaria o site.

Por isso o `/editar` pede um PAT só na sessão do navegador (`sessionStorage`). O token **não** fica no código nem no repo.

## Fluxo

1. Abra `/editar`
2. Cole um PAT com `contents:write`
3. Edite e **Salvar** → HTTP direto para a API do GitHub na branch `CMS`
4. Só os JSONs em `src/data/` são alterados
5. `main` não muda

## Criar o token

GitHub → Settings → Developer settings → Personal access tokens → Fine-grained:

- Repository: `Landing-Page`
- Permissions: **Contents: Read and write**
