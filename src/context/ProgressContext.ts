import { createContext } from "react";


interface ProgressData {
    // done: boolean,
    id: string | number
}

interface TestContextData {
    done: boolean,
}

// export const ProgressContext = createContext(false);
 
export const ProgressContext = createContext<ProgressData>({
    // done: false,
    id: 0
  })

export const TestContext = createContext<TestContextData>({
    done: false
})