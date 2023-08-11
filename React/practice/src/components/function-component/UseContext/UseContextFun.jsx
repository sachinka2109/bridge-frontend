import React, { createContext } from 'react'

const ColorContext =  createContext();
const ColorProvider = ColorContext.Provider
const ColorConsumer = ColorContext.Consumer

export {ColorProvider,ColorConsumer}