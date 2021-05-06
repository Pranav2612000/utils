# Benchmarking image uploading requests

1. Create a post_data.txt file which contains the post request contents. Here's how to create the file
   
   1. Add the following to post_data.txt
   
   ```
   --1234567890
   Content-Disposition: form-data; name="file"; filename="ab1_pod.jpg"
   Content-Type: application/jpeg
   Content-Transfer-Encoding: base64
   ```
   
   2. Append the image to post_data.txt
      
      ```bash
      base64 yourfile.png >> post_data.txt 
      ```
   
   3. Append the post data seperator to post_data.txt
      
      ```
      echo "--1234567890--" >> post_data.txt
      ```

2.  Make the ab call ( Remove the -H header if not authorization is required)
   
   ```
   ab -v 4 -n 1 -c 1 -H 'Authorization: Bearer e...Y' -p post_data.txt -T "multipart/form-data; boundary=1234567890" http://localhost:9091/v1/images
   ```

3. Modifying the parameters after confirming the request is being sent correctly
   
   ```
   -v 4  # verbocity
   -n 1  # number of requests in total
   -c 1  # number of concurrent requests
   ```
   
   
