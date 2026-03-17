import type { ReactNode } from 'react'
import type { CardData } from '../types/types'

interface CardProps extends CardData {
  children?: ReactNode
}

function Card({ image, title, text, button, children }: CardProps) {
  return (
    <div className="col-md-6 offset-md-3 g-4">
      <div className="card">
        {image && <img src={image} className="card-img-top" alt={title || 'Card image'} />}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {text && <p className="card-text">{text}</p>}
          {children}
          {button && (
            <a href={button.href || '#'} className={`btn ${button.variant || 'btn-primary'}`}>
              {button.text}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
