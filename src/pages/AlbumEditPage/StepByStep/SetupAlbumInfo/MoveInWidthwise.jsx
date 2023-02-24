import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: ${(props) => props.height};
  overflow: hidden;
  position: relative;
`

const DisplayedWrapper = styled.div`
  display: inline-block;
  height: 100vh;
  position: fixed;
  bottom: 0;
`

const MoveInWidthwise = ({ displayed, height }) => {
  const displayedWrapper = useRef(null)
  const container = useRef(null)
  const [containerHeight, setContainerHeight] = useState('0px')
  const [wrapperWidth, setWrapperWidth] = useState(0)
  const [progress, setProgress] = useState(0)
  const {
    innerWidth,
    innerHeight,
    addEventListener,
    removeEventListener
  } = window

  const updateProgress = () => {
    const { scrollTop } = document.documentElement
    const containerTop = container.current.offsetTop
    const containerHeightNumber = container.current.offsetHeight

    const newProgress =
      ((scrollTop - containerTop) * 100) / (containerHeightNumber - innerHeight)

    setProgress(newProgress)
  }

  useEffect(() => {
    if (!height) {
      setContainerHeight(
        `${
          (innerHeight * displayedWrapper.current.offsetWidth) / innerWidth
        }px`
      )
    } else {
      setContainerHeight(height)
    }

    setWrapperWidth(displayedWrapper.current.offsetWidth)
  }, [height])

  useEffect(() => {
    updateProgress()
    addEventListener('scroll', updateProgress)
    return () => {
      removeEventListener('scroll', updateProgress)
    }
  }, [])

  return (
    <Container height={containerHeight} ref={container}>
      <DisplayedWrapper
        style={{
          transform:
            progress >= 0
              ? progress > 100
                ? `translateX(-${
                    (100 * (wrapperWidth - innerWidth)) / wrapperWidth
                  }%)`
                : `translateX(-${
                    progress * ((wrapperWidth - innerWidth) / wrapperWidth)
                  }%)`
              : 'translateX(0%)',
          position:
            progress <= 100 ? (progress >= 0 ? 'fixed' : 'static') : 'absolute',
        }}
        ref={displayedWrapper}
      >
        {displayed}
      </DisplayedWrapper>
    </Container>
  )
}

export default MoveInWidthwise