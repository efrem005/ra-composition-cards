import Card from './components/Card'

const cards = [
  {
    id: 1,
    image: 'https://placehold.co/300x200',
    title: 'Заголовок карточки',
    text: 'Это пример текста карточки. Здесь можно разместить описание или любую другую информацию.',
    button: { text: 'Перейти', variant: 'btn-primary' }
  },
  {
    id: 2,
    title: 'Текстовая карточка',
    text: 'Пример карточки без изображения, содержащей только текстовое содержимое.',
    button: { text: 'Подробнее', variant: 'btn-outline-primary' }
  },
  {
    id: 3,
    title: 'Заголовок карточки',
    text: 'Это пример текста карточки. Здесь можно разместить описание.',
    button: { text: 'Действие', variant: 'btn-success' }
  }
]

function App() {
  return (
    <div className="container">
      <div className="row py-3">
        {cards.map((card) => (
          <Card {...card} key={card.id} />
        ))}
      </div>
    </div>
  )
}

export default App
