

function Eightball({ answeredQuestion }) {
    return (
        <div className="h-40 w-40 bg-gray-900 radius-full">
            <div className="Eightball-face">{answeredQuestion && answeredQuestion.answer}</div>
        </div>
    )
}

export default Eightball;