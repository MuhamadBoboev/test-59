import { Box, Button, Link } from "@mui/material"
import { PropsWithChildren } from "react"

export const Layout = ({children}: PropsWithChildren) => {
    return <Box
            display="flex"
            gap={4}
            height="100vh"
            >
                <Box
                    sx={{
                        height: '100vh',
                        overflow: 'auto',
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: '0 auto',
                        padding: '0 16px'
                    }}
                >
                    <Box
                        sx={{
                        maxWidth: 1432,
                        width: '100%',
                        }}
                    >
                        {children}
                    <Box/>
                    <Box textAlign={'center'} mt={5}>
                    
                    <Button
                        LinkComponent={Link}
                        href="https://github.com/MuhamadBoboev"
                        target="_blank"
                        color="info"
                        sx={{
                            textDecoration: 'none',
                            color: 'white'
                        }}
                        >
                        Developer by Boboev M
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
}