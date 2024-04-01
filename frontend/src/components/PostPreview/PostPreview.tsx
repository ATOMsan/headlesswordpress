import { Card, CardContent, CardHeader, CardTitle } from 'components/ui/card'
import React from 'react'

export const PostPreview = ({ postData }: any) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle
          dangerouslySetInnerHTML={{ __html: postData?.title.rendered }}
        />
      </CardHeader>
      <CardContent
        dangerouslySetInnerHTML={{
          __html: postData?.excerpt.rendered
        }}
      />
    </Card>
  )
}
