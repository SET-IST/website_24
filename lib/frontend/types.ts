import { QueryClient } from '@tanstack/react-query'
import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  PreviewData,
} from 'next'
import type { ParsedUrlQuery } from 'querystring'

type MyGetStaticPropsContext<Q extends ParsedUrlQuery = ParsedUrlQuery, D extends PreviewData = PreviewData> = Omit<
  GetStaticPropsContext<Q, D>,
  'locale'
>

type MyGetStaticProps<CONTENT, Q extends ParsedUrlQuery = ParsedUrlQuery, D extends PreviewData = PreviewData> = (
  _context: MyGetStaticPropsContext<Q, D>
) => Promise<GetStaticPropsResult<CONTENT>> | GetStaticPropsResult<CONTENT>

type MyGetServerSidePropsContext<Q extends ParsedUrlQuery = ParsedUrlQuery, D extends PreviewData = PreviewData> = Omit<
  GetServerSidePropsContext<Q, D>,
  'locale'
>

type MyGetServerSideProps<CONTENT, Q extends ParsedUrlQuery = ParsedUrlQuery, D extends PreviewData = PreviewData> = (
  _context: MyGetServerSidePropsContext<Q, D>
) => Promise<GetServerSidePropsResult<CONTENT>> | GetServerSidePropsResult<CONTENT>

type ServerSideFetchQueryCall = (_queryClient: QueryClient, _context: MyGetStaticPropsContext) => Promise<void>

export type {
  MyGetStaticProps,
  MyGetServerSideProps,
  MyGetStaticPropsContext,
  MyGetServerSidePropsContext,
  ServerSideFetchQueryCall,
}
