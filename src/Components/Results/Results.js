import Spinner from 'react-bootstrap/Spinner';
import './Results.scss'

export default function Results(props) {
  const { status, results, isLoading } = props
  return (
    <section>
      { isLoading 
        ? 
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        : 
          status === 200
          ? <pre id="results">{results ? JSON.stringify(results, undefined, 2) : null}</pre>
          : <pre id="results">{results}</pre>
      }
    </section>
  )
}