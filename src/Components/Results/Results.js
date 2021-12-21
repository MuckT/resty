export default function Results(props) {
  const { results } = props
  return (
    <section>
      <pre style={styles.response}>{results ? JSON.stringify(results, undefined, 2) : null}</pre>
    </section>
  )
}

const styles = {
  response: {
    textAlign: 'left',
  }
}