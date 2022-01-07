import React from "react";
import Button from 'react-bootstrap/Button';
import './History.scss';

export default function History(props) {
  const { history, historyClick } = props
  return (
    <div className="d-grid gap-2 m-2">
      {history.map((item, idx) => {
        return(
          <Button key={idx} onClick={() => historyClick(item)} variant="secondary" size="lg">
            {item.method} {item.url}
          </Button>
        )   
      })}
    </div>
  )
}