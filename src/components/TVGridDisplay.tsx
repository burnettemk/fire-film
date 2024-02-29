import React from "react";
import { Series } from "../hooks/useTV";
import { FetchResponse } from "../services/api-client";
import { InfiniteData, UseInfiniteQueryResult } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import CardSkeleton from "./CardSkeleton";
import SeriesCard from "./SeriesCard";

interface Props {
  response: UseInfiniteQueryResult<
    InfiniteData<FetchResponse<Series>, unknown>,
    Error
  >;
}

const TVGridDisplay = ({ response }: Props) => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetching,
    hasNextPage,
    isFetchingNextPage,
  } = response;

  const fetchedSeriesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedSeriesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4, xl: 5 }}
        spacing={{ base: "3.5em", lg: "2.5em", "2xl": "2.9em" }}
        padding={{ base: "4em" }}
        mx="auto"
        w="89%"
      >
        {isLoading &&
          skeletons.map((skeleton) => <CardSkeleton key={skeleton} />)}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((series) => (
              <SeriesCard key={series.id} series={series} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default TVGridDisplay;
