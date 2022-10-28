import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface Calculations {
  calcString: string
}

const initialState: Calculations = {
  calcString: '0'
}

export const calculationsSlice = createSlice({
  name: 'calculations',
  initialState,
  reducers: {
    inputValue(state, action: PayloadAction<string>) {
      if(state.calcString === '0') {
        state.calcString = ''
      }
      state.calcString += action.payload
    },

    operations(state, action: PayloadAction<string>) {
      switch (action.payload) {
        case 'CE':
          if(state.calcString.length === 1) {
            state.calcString = '0'
            return
          }
          state.calcString = state.calcString.substring(0, state.calcString.length - 1)   
          break

        case 'C':
          state.calcString = '0'
          break

        case '=':
          // eslint-disable-next-line no-eval
          state.calcString = eval(state.calcString)
          break
      }
    },
  },
})

export default calculationsSlice.reducer