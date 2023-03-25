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
    const options = { year: 'numeric' }
    const [year, month, day] = date.split('-')

    if (month) {
      options.month = 'numeric'
    }

    if (day) {
      options.day = 'numeric'
    }

    if (month && !day) {
      options.month = 'long'
    }

    return new Date(date).toLocaleDateString(locale, options)
  }

  function getStartDatePrefix(date) {
    const [, month, day] = date.split('-')
    return month && !day ? 'De' : 'Du'
  }

  function getEndDatePrefix(date) {
    const [, month, day] = date.split('-')
    return month && !day ? 'à' : 'au'
  }

  function hasDay(date) {
    const [, , day] = date.split('-')
    return !!day
  }
</script>

{#if startDate === endDate}
  {formatDate(startDate)}
{:else if endDate}
  {getStartDatePrefix(startDate)}
  {formatDate(startDate)}
  {getEndDatePrefix(startDate)}
  {formatDate(endDate)}
{:else}
  Depuis {#if hasDay(startDate)}le{/if}
  {formatDate(startDate)}
{/if}
