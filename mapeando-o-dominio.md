# Gerenciamento de Estoque

Baseado no texto abaixo, consegui identificar as seguintes **entidades** e **casos de uso**.

https://efficient-sloth-d85.notion.site/Atividade-Mapeando-o-dom-nio-38963358ffd74289b824ff73b187165d

## Entidades
* produto
* vendas
* estoque
* ordem de compra
* fornecedor

## Casos de Uso
* o sistema deve rastrear produto.
* o sistema deve definir a quantidades mínima de estoque por produto.
* o sistema deve emitir alertas por email e notificação no sistema quando estivermos ficando sem um determinado produto
* deve ser possível visualizar o histórico de vendas e estoque para ajudar a tomarmos decisões futuras de compra
* fornecer métrica de quantos produtos vendemos em um determinado período
* fornecer métrica de qual foi o lucro gerado por produto
* fornecer métrica de quais produtos estão vendendo melhor em cada período
* observar as tendências de estoque ao longo do tempo, para nos ajudar a tomar decisões de compra mais adequadas
* o sistema deve nos permitir criar e gerenciar ordens de compra automaticamente
* o sistema deve integrar com o sistema dos nossos fornecedores, para que pudéssemos receber atualizações automáticas sobre os prazos de entrega de novas remessas.
