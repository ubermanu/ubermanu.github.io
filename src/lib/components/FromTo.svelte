<script>
  /** @type {string} */
  export let startDate

  /** @type {string} */
  export let endDate = ''

  /**
   * @param {string} date
   * @param {string} [locale]
   * @returns {string}
   */
  function formatDate(date, locale = 'fr-FR') {
    /** @type {Intl.DateTimeFormatOptions} */
    const options = { year: 'numeric' }
    const [, month, day] = date.split('-')

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

  /**
   * @param {string} date
   * @returns {string}
   */
  function getStartDatePrefix(date) {
    const [, month, day] = date.split('-')
    return month && !day ? 'De' : 'Du'
  }

  /**
   * @param {string} date
   * @returns {string}
   */
  function getEndDatePrefix(date) {
    const [, month, day] = date.split('-')
    return month && !day ? 'à' : 'au'
  }

  /**
   * @param {string} date
   * @returns {boolean}
   */
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
