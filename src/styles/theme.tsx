import { extendTheme } from '@chakra-ui/react'
const baseStyle = {
    fontFamily: "Roboto Mono, monospace",
    color: "black",
};

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                backgroundColor: "#ffecde",
                ...baseStyle
            }
        }
    },
    components: {
        Heading: {
            baseStyle
        },
        Table: {
            variants: {
                simple: {
                    th: {
                        borderColor: "black",
                        fontWeight: "bold",
                        borderBottom: "2px solid black",
                        fontSize: "15px",
                        ...baseStyle
                    },
                    td: {
                        borderColor: "black",
                        ...baseStyle
                    },
                }
            }
        },
        Button: {
            variants: {
                outline: {
                    backgroundColor: "white",
                    borderRadius: "10px",
                }
            }
        },
        Select: {
            baseStyle: {
                field: {
                    borderRadius: "10px",
                    backgroundColor: "white",
                    borderColor: "black",
                    ...baseStyle
                }
            },
            variants: {
                outline: {
                    field: {
                        _focus: {
                            borderColor: "black",
                            borderWidth: "2px",
                            shadow: "md",
                        }
                    }
                }
            }
        },
        Input: {
            baseStyle: {
                group: {
                    borderRadius: "10px",
                    backgroundColor: "white",
                    shadow: "md",
                    ...baseStyle
                },
            },
            variants: {
                outline: {
                    field: {
                        _focus: {
                            borderColor: "black",
                            borderWidth: "2px",
                            shadow: "md",
                        }
                    }
                }
            }
        }
    }
});