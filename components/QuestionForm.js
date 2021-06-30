
export default function QuestionForm({ action }) {
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.question);
        action(e.target.question.value)
    }

    return (
        <form className="p-4 m-4 border-gray-900 border-solid border-4" onSubmit={handleSubmit}>
            <div className="p-1 m-1 inline border-gray-200 border-solid border-2">
            
            <input  id="question" type="text" placeholder="Ask me anything" required />
            </div>
            <button type="submit">Ask</button>
    </form>)
}