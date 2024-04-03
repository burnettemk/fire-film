import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { InfiniteData, UseInfiniteQueryResult } from "@tanstack/react-query";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Content from "../entities/Content";
import { FetchResponse } from "../services/api-client";
import CardSkeleton from "./CardSkeleton";
import ContentCard from "./ContentCard";

interface Props {
  response: UseInfiniteQueryResult<
    InfiniteData<FetchResponse<Content>, unknown>,
    Error
  >;
}

const ContentGridDisplay = ({ response }: Props) => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const {
    data,
    isLoading,
    error,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = response;

  const fetchedContentCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedContentCount}
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
        // spacing={{ base: "3.5em", lg: "2.5em", "2xl": "2.9em" }}
        spacingX={{ base: "5%", md: "10%", lg: "5%" }}
        spacingY={"3.5em"}
        padding={"4em"}
        mx="auto"
        w="90%"
      >
        {isLoading &&
          skeletons.map((skeleton) => <CardSkeleton key={skeleton} />)}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((content) => (
              <ContentCard key={content.id} content={content} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default ContentGridDisplay;
