import express from 'express';

export function errorResponseHelper(
  res: express.Response,
  statusCode: number,
  errorMessage: string
) {
  res.status(statusCode).json({
    success: false,
    message: errorMessage,
  });
}

export const successResponseHelper = (
  res: express.Response,
  statusCode: number,
  message: string,
  data?: any,
  totalCount?: number
) => {
  if (!data) {
    res.status(statusCode).json({ message });
  } else {
    if (totalCount) {
      res.status(statusCode).json({ message, data, totalCount });
    } else {
      res.status(statusCode).json({ message, data });
    }
  }
};
