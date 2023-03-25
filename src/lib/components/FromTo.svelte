<script>
  /**
   * @type {string}
   */
  export let startDate

  /**
   * @type {string}
   */
  export let endDate = ''

  /**
   * @type {'long' | 'short'}
   */
  export let format = 'long'

  function formatDate(date, locale = 'fr-FR') {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
    return new Date(date).toLocaleDateString(locale, options)
  }
</script>

{#if endDate}
  Du {formatDate(startDate)} au {formatDate(endDate)}
{:else}
  Depuis le {formatDate(startDate)}
{/if}
