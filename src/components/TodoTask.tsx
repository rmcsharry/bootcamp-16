import { Task } from '../models/Task'
import { Checkbox } from '../ui/checkbox'

type TodoTaskProps = {
  task: Task
  onCompletedChange: (task: Task) => void
}
export function TodoTask({ task, onCompletedChange }: TodoTaskProps) {
  const handleCompletedChanged = () => {
    onCompletedChange(task)
  }

  return (
    <div key={task.id} className="grid grid-cols-[30px_auto_auto]">
      <Checkbox checked={task.completed} onCheckedChange={handleCompletedChanged} />
      <p>{task.title}</p>
      <p>{task.due_time}</p>
    </div>
  )
}
