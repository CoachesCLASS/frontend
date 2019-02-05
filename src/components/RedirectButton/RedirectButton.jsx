import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, CircularProgress, Fade } from '@material-ui/core';

function RedirectButton(props) {
  const [loading, setLoading] = useState(false)
  
  async function handleClick() {
    if (loading) {
      return
    }

    if (props.onClick) {
      setLoading(true)
      const newProps = await props.onClick()
      setImmediate(false)
      var { newPath, newState } = newProps || {}
    }
    window.scrollTo(0, 0)
    props.history.push({ pathname: newPath || props.path, state: newState || props.state });
  }

  return (
    <>
      <Button
        fullWidth
        variant="contained"
        size="large"
        color="primary"
        onClick={handleClick}
        disabled={props.disabled && props.disabled()}
        className={props.className}
      >
        {
          // loading ? (
          //   // <CircularProgress className={classes.progress} />
          // ):
            props.children
        }
      </Button>
      <Fade
        in={loading}
        style={{
          transitionDelay: loading ? '800ms' : '0ms',
        }}
        unmountOnExit
      >
        <CircularProgress />
      </Fade>
    </>
  )
}

export default withRouter(RedirectButton);
