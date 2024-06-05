import { Button, Container, HStack, Heading, Input, List, ListItem, Text } from "@yamada-ui/react"
import { useState } from "react"


function App() {
  const [todoname,settodoname] = useState("")
  const [todos,settodos]=useState<string[]>([])
  return (
    <>
      
      <Container>
        <Heading>
          todoAPP
        </Heading>
        <HStack
        gap = {0}>
          <Input
          type = "text"
          placeholder="enter your todo"
          borderTopRightRadius={0}
          borderBottomRightRadius={0}
          value={todoname}
          onChange = {(e)=>settodoname(e.target.value)}/>
          <Button
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
          onClick={()=>{
            console.log(todoname)
            if (todoname==="") return
            settodos([...todos,todoname])
            settodoname("")
          }}>
            add
          </Button>
        </HStack>
        {
          todos.length === 0 ?
            <Text>No todo.</Text>
            :
            <List>
              {todos.map((todo, i) => (
                <ListItem key={i}>{todo}</ListItem>
              ))}
            </List>
        }
      </Container>
    </>
  )
}

export default App
