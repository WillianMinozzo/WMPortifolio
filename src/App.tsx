import ReactBulk, {Box, Card, Carousel, Grid, Image, Text} from "@react-bulk/web";
import {GithubLogo, LinkedinLogo} from "phosphor-react";
import dark from "./themes/main";

export default function App() {

    return (
        <ReactBulk theme={dark}>
            <Box
                h="100%"
                w="100%"
                style={{
                    // background: 'linear-gradient(45deg, rgba(41,98,255,1) 0%, rgba(103,51,255,1) 20%, rgba(170,0,255,1) 100%)',
                    background: 'linear-gradient(45deg, rgba(122,153,237,0.8953956582633054) 39%, rgba(198,125,235,1) 89%)',
                }}
            >
                <Box center align="center" w={500} maxw="100%" p={3} mt={20}>
                    <Text bold> Hello, I'm </Text>
                    <Text row noWrap bold variant="h1" mt={3}>
                        Willian Minozzo
                    </Text>
                    <Text mt={3}>Developer</Text>
                </Box>
                <Grid center gap={5} mt={3}>
                    <Box xs={5} md={5} sm={7}>
                        <Card bg="colors.gray" h={800} maxh="100%" maxw={400}>
                            <Box align="center" h={300} maxh="100%" w={300} maxw="100%">
                                <Image corners={3} source="src\assets\will.jpg"/>
                            </Box>
                            <Box center row mt={3} h={80}>
                                <Box
                                    target="_blank"
                                    styles={{textDecoration: 'none'}}
                                    component="a"
                                    href="https://www.linkedin.com/in/willian-minozzo-429a63197/"
                                    mr={3}
                                >
                                    <LinkedinLogo size={32} color="white"/>
                                </Box>
                                <Box target="_blank" styles={{textDecoration: 'none'}} component="a"
                                     href="https://github.com/willianMinozzo">
                                    <GithubLogo size={32} color="white"/>
                                </Box>
                            </Box>
                        </Card>
                    </Box>
                    <Box xs={6} md={6} sm={7} maxh="100%">
                        <Card h={500}>
                            <Text variant="h3" bold>
                                About Me
                            </Text>
                            <Text mt={3}>
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                                a type specimen book. It has survived
                                not only five centuries, but also the leap into electronic typesetting, remaining
                                essentially unchanged. It was popularised in
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                recently with desktop publishing
                                software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Text>
                            <Text variant="h3" bold mt={3}>
                                My experience
                            </Text>
                            <Text mt={3}>
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                                a type specimen book. It has survived
                                not only five centuries, but also the leap into electronic typesetting, remaining
                                essentially unchanged. It was popularised in
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                recently with desktop publishing
                                software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Text>
                        </Card>
                    </Box>
                </Grid>
                <Text center variant="h2" mt={50}>
                    Portifolio
                </Text>
                <Box center mt={10}>
                    <Carousel w={1200} maxw="100%" xs={1} sm="auto" md={3} lg={3} xl={3} gap={3}>
                        {Array.from({length: 10}).map((i, index) => (
                            <Box key={index}>
                                <Card w={400} maxw="100%" h={500} maxh="100%">
                                    <Box align="center" w={300} h={300}  border="1px red solid" >
                                        <Image corners={3} source="src\assets\livros.jpg"/>
                                    </Box>
                                    <Text variant="h4" bold mt={4}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's standard dummy text ever
                                        </Text>
                                </Card>
                            </Box>
                        ))}
                    </Carousel>
                </Box>
            </Box>
        </ReactBulk>
    )
}
