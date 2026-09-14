# Branch CMS — só conteúdo

A branch `CMS` no GitHub tem **apenas**:

```
data/
  site.json
  painPoints.json
  modules.json
  plans.json
  contact.json
```

O código do site + `/editar` ficam na **`main`**.  
Salvar no editor grava os JSONs na branch `CMS` (pasta `data/`).

Para trazer conteúdo para o código: copie `data/*.json` → `src/data/` na main.
