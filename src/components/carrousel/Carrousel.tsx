import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Avatar, Badge, Box, Stack, Typography } from '@mui/material'
import CardComponent from './CardComponent';
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material/styles';

type Props = {}

function Carrousel({ }: Props) {

    const tasks = useSelector((store) => {
        return (store.storeTasks.tasks);
    })

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#64acc6',
            color: '#44b700',
            boxShadow: `0 0 0 2px #21212d`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid #64acc6',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));

    // console.log(tasks);


    return (
        <Box sx={{ padding: "1rem" }}>






            <Swiper


                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                slidesPerView={1.1}
                spaceBetween={20}
                breakpoints={{
                    640: {
                        slidesPerView: 2.2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3.2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4.2,
                        spaceBetween: 20,
                    },
                }}
                className="mySwiper"

            >
                <SwiperSlide>

                    <Box sx={{ border: "1px solid RGBA(255, 255, 255,0.02)", borderRadius: "0.5rem", padding: "0.5rem" }}>
                        <Stack justifyContent="" alignItems="center" direction="row" sx={{ paddingY: "0.8rem" }}>
                            <Box sx={{ position: "relative", paddingRight: "1rem" }}>
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                                    variant="dot"

                                />
                            </Box>
                            <Typography variant="body1" >TODO (5)</Typography>
                        </Stack>
                        <Box sx={{
                            width: "100%", background: "", padding: "0.5rem", height: "75vh", overflowY: "scroll",
                            "  &::-webkit-scrollbar": {
                                display: "none"
                            }

                        }}>


                            {
                                tasks.map((task: { title: string, subtasks: [] }) => (
                                    <CardComponent key={task.title} task={task} />
                                ))
                            }


                        </Box>
                    </Box>

                </SwiperSlide>
                <SwiperSlide>

                    <Box sx={{ border: "1px solid RGBA(255, 255, 255,0.02)", borderRadius: "0.5rem", padding: "0.5rem" }}>
                        <Stack justifyContent="" alignItems="center" direction="row" sx={{ paddingY: "0.8rem" }}>
                            <Box sx={{ position: "relative", paddingRight: "1rem" }}>
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                                    variant="dot"
                                    sx={{ '& .MuiBadge-badge': { background: "#836ff6" } }}

                                />
                            </Box>
                            <Typography variant="body1" >DOING (5)</Typography>
                        </Stack>
                        <Box sx={{
                            width: "100%", background: "", padding: "0.5rem", height: "75vh", overflowY: "scroll",
                            "  &::-webkit-scrollbar": {
                                display: "none"
                            }

                        }}>


                            {
                                tasks.map((task: { title: string, subtasks: [] }) => (
                                    <CardComponent key={task.title} task={task} />
                                ))
                            }


                        </Box>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>

                    <Box sx={{ border: "1px solid RGBA(255, 255, 255,0.02)", borderRadius: "0.5rem", padding: "0.5rem" }}>
                        <Stack justifyContent="" alignItems="center" direction="row" sx={{ paddingY: "0.8rem" }}>
                            <Box sx={{ position: "relative", paddingRight: "1rem" }}>
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                                    variant="dot"
                                    sx={{ '& .MuiBadge-badge': { background: "#6cc1a2" } }}

                                />
                            </Box>
                            <Typography variant="body1" >DONE (5)</Typography>
                        </Stack>
                        <Box sx={{
                            width: "100%", background: "", padding: "0.5rem", height: "75vh", overflowY: "scroll",
                            "  &::-webkit-scrollbar": {
                                display: "none"
                            }

                        }}>


                            {
                                tasks.map((task: { title: string, subtasks: [] }) => (
                                    <CardComponent key={task.title} task={task} />
                                ))
                            }


                        </Box>
                    </Box>

                </SwiperSlide>


            </Swiper>


        </Box >
    )
}

export default Carrousel