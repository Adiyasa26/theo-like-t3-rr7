import React from "react";
import type { FallbackProps } from "react-error-boundary";

type ErrorPageProps = FallbackProps;

export default function ErrorPage(props: ErrorPageProps) {
  return <div>ErrorPage - {props?.error}</div>;
}
