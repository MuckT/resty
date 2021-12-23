import Spinner from 'react-bootstrap/Spinner';

export default function Results(props) {
  const { results, isLoading } = props
  return (
    <section>
      { isLoading 
        ? 
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        : <pre style={styles.response}>{results ? JSON.stringify(results, undefined, 2) : null}</pre>
      }
    </section>
  )
}

const styles = {
  response: {
    textAlign: 'left',
  }
}