import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@shared/theme";
import { Toaster } from "react-hot-toast";
import { ApiProvider } from "./api-provider";
import { Main } from "@widgets/main-page";
import { Layout } from "@shared/layout";

export const Providers = () => {

      
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
                <ApiProvider>
                    <Layout>
                        <Main />
                    </Layout>                
                </ApiProvider>            
            <Toaster
                position="top-center"
            />
        </ThemeProvider>
    );
}