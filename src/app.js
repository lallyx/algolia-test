/* global instantsearch algoliasearch */

const search = instantsearch({
  indexName: 'spencer_and_williams',
  searchClient: algoliasearch('29DJWCHMLQ', '3ad39b883a1f194b8118d161235cf389'),
  insights: true,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.refinementList({
    container: '#brand-facet',
    attribute: 'brand',
  }),
  instantsearch.widgets.refinementList({
    container: '#categories-facet',
    attribute: 'categories',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: (hit, { html, sendEvent }) => html`
        <div>
          <img src="${hit.image}" align="left" alt="${hit.name}" />
          <div class="hit-name">
            ${hit.name}
          </div>
          <div>
            <button
              onclick="${() => sendEvent('click', hit, 'my-click-event')}"
            >
              Click event
            </button>
            <button
              onclick="${() =>
                sendEvent('conversion', hit, 'my-conversion-event')}"
            >
              Conversion event
            </button>
          </div>
        </div>
      `,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
