

export default function QuestionForm({ answeredQuestions }) {

    return (
        <table>
            <thead>
                <tr>
                    <th>Number</th>
                    <th>Question</th>
                    <th>Answer</th>
                </tr>
            </thead>
            <tbody>
                {answeredQuestions.map(a =>
                    <tr key={a.id}>
                        <td>{a.id}</td>
                        <td>{a.question}</td>
                        <td>{a.answer}</td>
                    </tr>
                )
                }
            </tbody>
        </table>
    )
}