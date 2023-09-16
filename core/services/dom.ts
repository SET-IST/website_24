type EmbedExternalScriptParams = {
  src: string
  onLoad?: EventListenerOrEventListenerObject
  isInBody?: boolean
}

const isClient = () => typeof window !== 'undefined'

const scrollToTop = () => {
  isClient() && window.scrollTo(0, 0)
}

const freezeBodyScroll = () => {
  if (isClient()) {
    let callerCount = +(document.body.dataset.callerCount || 0)
    document.body.dataset.callerCount = (++callerCount).toString()
    document.body.style.setProperty('overflow', 'hidden')
  }
}

const unfreezeBodyScroll = () => {
  if (isClient()) {
    let callerCount = +(document.body.dataset.callerCount || 0)

    if (callerCount > 0) {
      document.body.dataset.callerCount = (--callerCount).toString()
    }

    if (callerCount < 1) {
      document.body.style.removeProperty('overflow')
    }
  }
}

const getSearchParams = () => {
  if (isClient()) {
    return new URLSearchParams(window.location.search)
  }
}

const embedExternalScript = ({
  src,
  onLoad,
  isInBody,
}: EmbedExternalScriptParams) => {
  const externalScriptElement = document.createElement('script')
  onLoad && externalScriptElement.addEventListener('load', onLoad)
  externalScriptElement.setAttribute('src', src)
  externalScriptElement.setAttribute('type', 'text/javascript')
  externalScriptElement.async = true
  externalScriptElement.defer = true
  document[isInBody ? 'body' : 'head'].appendChild(externalScriptElement)
}

export {
  isClient,
  scrollToTop,
  freezeBodyScroll,
  unfreezeBodyScroll,
  getSearchParams,
  embedExternalScript,
}
