import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Button } from '../ui/button'
import { getTasks } from '../api/getTasks'
import { SpinnerMessage } from '../components/SpinnerMessage'
import { TodoTask } from '../components/TodoTask'
import { Task } from '../models/Task'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Card } from '../ui/card'
import { updateTask } from '../api/updateTask'

export function TodosPage() {
  const client = useQueryClient()
  const { data, error, isLoading } = useQuery<Task[]>({
    queryKey: ['todos'],
    queryFn: getTasks,
  })

  const updateTaskMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  if (error) return <div>Error: {error.message}</div>

  const handleAddTask = () => { }

  const handleCompletedChanged = (task: Task) => {
    updateTaskMutation.mutate({ ...task, completed: !task.completed })
  }

  return (
    <div className="p-8 h-screen w-full flex justify-center items-center">
      <div className="mx-auto flex flex-col space-y-6 sm:w-[350px]">
        <h1 className="mx-auto text-2xl">Tasks</h1>
        <p>HELLO</p>
        <Tabs defaultValue="due" className="w-full">
          <TabsList>
            <TabsTrigger value="due">Due</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="due">
            <Card className="min-h-80 p-2">
              {isLoading && <SpinnerMessage message="Loading..." />}
              {data?.map((task) => (
                <TodoTask key={task.id} task={task} onCompletedChange={handleCompletedChanged} />
              ))}
            </Card>
          </TabsContent>
          <TabsContent value="completed">
            <Card className="min-h-80 p-2">
              {data?.map((task) => (
                <TodoTask key={task.id} task={task} onCompletedChange={handleCompletedChanged} />
              ))}
            </Card>
          </TabsContent>
        </Tabs>
        <Button variant="highlight" onClick={handleAddTask}>
          Add New Task
        </Button>
      </div>
    </div>
  )
}
