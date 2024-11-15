function calculate(input) {
  try {
    // Sử dụng eval để tính toán, nhưng hãy cẩn thận với việc sử dụng eval trong thực tế.
    const result = eval(input);
    return `Kết quả của phép toán ${input} là: ${result}`;
  } catch (error) {
    return "Đã xảy ra lỗi trong quá trình tính toán. Vui lòng kiểm tra lại phép toán của bạn.";
  }
}

// Function to analyze user input
function analyzeInput(input) {
  const inputLower = input ? input.toLowerCase() : "";
  if (/^\s*\d+\s*[+\-*/]\s*\d+\s*$/.test(inputLower)) {
    return calculate(inputLower);
  }
  const responses = {
    "đau đầu":
      "Dạ, nếu bạn bị đau đầu, có một số cách bạn có thể thực hiện để giảm cơn đau:" +
      "1. Nghỉ ngơi: Tìm một nơi yên tĩnh để thư giãn. Chỉ cần nằm nghỉ ngơi trong vài phút có thể giúp giảm đau." +
      "2. Thư giãn: Thực hiện các bài tập hít thở sâu hoặc ngồi thiền có thể giảm căng thẳng, giúp giảm đau đầu." +
      "3. Uống nước: Đảm bảo uống đủ nước. Mất nước có thể là nguyên nhân gây đau đầu." +
      "4. Áp dụng lạnh hoặc nóng: Dùng túi đá hoặc khăn ấm chườm lên đầu có thể giúp giảm đau." +
      "5. Thuốc giảm đau: Bạn có thể sử dụng thuốc giảm đau như paracetamol, nhưng nhớ tham khảo ý kiến bác sĩ nếu có tình trạng sức khỏe khác.\n\n" +
      "6. Theo dõi triệu chứng: Nếu đau đầu kèm các triệu chứng khác như buồn nôn hoặc mờ mắt, hãy đi khám để được tư vấn thêm.\n\n" +
      "Nếu cơn đau đầu kéo dài hoặc trở nên nghiêm trọng, bạn nên đến gặp bác sĩ để được điều trị đúng cách và an toàn.\n\n",
    "đau bụng":
      "Dạ, nếu bạn bị đau bụng, có thể thử:\n\n" +
      "1. Theo dõi triệu chứng: Ghi lại vị trí, mức độ và các triệu chứng kèm theo.\n\n" +
      "2. Nghỉ ngơi: Hạn chế hoạt động nặng và nghỉ ngơi tại nhà.\n\n" +
      "3. Ăn uống hợp lý: Tránh thực phẩm nhiều dầu mỡ; uống nước gừng hoặc trà nóng.\n\n" +
      "4. Chườm nóng: Đặt túi chườm hoặc khăn ấm lên bụng để giảm đau.\n\n" +
      "5. Thuốc giảm đau: Dùng paracetamol nếu cần, nhưng nên hỏi ý kiến bác sĩ.\n\n" +
      "6. Đi khám: Nếu đau bụng nghiêm trọng hoặc kèm theo sốt, nôn, hãy đến bác sĩ để được chẩn đoán và điều trị kịp thời.\n\n",
    "mệt mỏi":
      "Dạ, nếu bạn cảm thấy mệt mỏi, hãy thử:\n\n" +
      "1. Ngủ đủ giấc: 7-8 giờ mỗi đêm giúp bạn giảm mệt mỏi.\n\n" +
      "2. Ăn uống lành mạnh: Ăn nhiều trái cây, rau xanh và tránh đồ ngọt.\n\n" +
      "3. Vận động nhẹ: Đi bộ hoặc yoga giúp tăng năng lượng.\n\n" +
      "4. Thư giãn: Thực hành hít thở sâu, thiền để giảm căng thẳng.\n\n" +
      "5. Khám sức khỏe: Nếu mệt mỏi kéo dài, hãy gặp bác sĩ.\n\n" +
      "Nếu tình trạng không cải thiện, bạn nên đến bác sĩ để được tư vấn chi tiết.\n\n",
    "đau khớp":
      "Dạ, nếu bạn bị đau khớp, có thể tham khảo một số cách giảm đau dưới đây:\n\n" +
      "1. Nghỉ ngơi: Hạn chế vận động mạnh để không làm tình trạng đau tệ hơn.\n\n" +
      "2. Chườm lạnh hoặc nóng: Chườm lạnh giảm sưng, chườm nóng giúp thư giãn cơ và tăng lưu thông máu.\n\n" +
      "3. Tập luyện nhẹ: Duy trì các bài tập nhẹ như đi bộ, bơi lội hoặc yoga để khớp linh hoạt hơn.\n\n" +
      "4. Dùng thuốc giảm đau: Có thể dùng paracetamol hoặc ibuprofen, nhưng hãy hỏi ý kiến bác sĩ.\n\n" +
      "5. Ăn uống lành mạnh: Bổ sung omega-3 từ cá, hạt, và rau xanh giúp giảm viêm.\n\n" +
      "6. Điều trị y tế: Nếu đau kéo dài hoặc nặng hơn, nên gặp bác sĩ để có phương pháp điều trị thích hợp.\n\n" +
      "7. Kiểm tra định kỳ: Nếu có bệnh khớp, hãy thăm khám thường xuyên để theo dõi tình trạng.\n\n",
    "đau tai":
      "Dạ, đau tai có thể do nhiều nguyên nhân và cách giảm đau sẽ phụ thuộc vào nguyên nhân cụ thể:\n\n" +
      "Nguyên nhân:\n" +
      "1. Viêm tai giữa: Do nhiễm virus hoặc vi khuẩn, thường kèm sốt, giảm thính lực.\n" +
      "2. Viêm ống tai ngoài: Do nhiễm trùng, dị ứng, có thể gây ngứa, ù tai.\n" +
      "3. Thay đổi áp suất: Đi máy bay hoặc lặn có thể làm đau tai do áp lực.\n" +
      "4. Chấn thương: Chấn thương vùng tai hoặc đầu.\n\n" +
      "Cách điều trị:\n" +
      "1. Thuốc giảm đau: Dùng paracetamol hoặc ibuprofen để giảm đau.\n" +
      "2. Kháng sinh: Nếu có nhiễm trùng, hãy theo đơn bác sĩ.\n" +
      "3. Sát khuẩn: Với viêm ống tai ngoài, vệ sinh và bôi thuốc mỡ kháng sinh.\n" +
      "4. Giảm áp lực: Nuốt hoặc nhai kẹo cao su để giảm áp lực tai.\n\n" +
      "Phòng ngừa:\n" +
      "- Tránh dùng tăm bông để vệ sinh tai.\n" +
      "- Hạn chế nước vào tai khi tắm, bơi.\n" +
      "- Sử dụng nút tai khi ở nơi ồn ào.\n\n" +
      "Nếu đau kéo dài, nên gặp bác sĩ để kiểm tra và điều trị kịp thời.\n",
    "đau răng":
      "Dạ, đau răng có thể do nhiều nguyên nhân khác nhau. Dưới đây là thông tin về nguyên nhân và cách giảm đau:\n\n" +
      "Nguyên nhân:\n" +
      "1. Sâu răng: Do vi khuẩn tạo axit làm hư men răng.\n" +
      "2. Viêm lợi: Gây đau và có thể chảy máu lợi.\n" +
      "3. Nhiễm trùng tủy răng: Đau dữ dội nếu sâu răng không được điều trị.\n" +
      "4. Răng khôn mọc: Có thể gây đau khi không đủ không gian.\n" +
      "5. Chấn thương: Gãy hoặc rạn răng do va chạm.\n\n" +
      "Triệu chứng:\n" +
      "- Đau khi nhai, đau lan đến hàm, tai, đầu.\n" +
      "- Sưng lợi, hơi thở có mùi hôi.\n\n" +
      "Cách điều trị:\n" +
      "1. Khám nha sĩ để xác định nguyên nhân.\n" +
      "2. Thuốc giảm đau: Dùng paracetamol hoặc ibuprofen.\n" +
      "3. Điều trị nguyên nhân: Trám, điều trị tủy nếu cần.\n" +
      "4. Chăm sóc tại nhà: Súc miệng nước muối, tránh thực phẩm gây kích thích.\n\n" +
      "Phòng ngừa:\n" +
      "- Đánh răng 2 lần/ngày và dùng chỉ nha khoa.\n" +
      "- Khám nha sĩ định kỳ.\n" +
      "- Hạn chế thực phẩm nhiều đường.\n\n" +
      "Nếu cơn đau kéo dài, nên gặp nha sĩ để tránh biến chứng.\n",
    ho:
      "Dạ, ho là một phản xạ tự nhiên của cơ thể giúp loại bỏ các tác nhân gây hại khỏi đường hô hấp. Tuy nhiên, ho có thể do nhiều nguyên nhân khác nhau. Dưới đây là các thông tin chi tiết:\n\n" +
      "Nguyên nhân gây ho:\n" +
      "1. Nhiễm trùng đường hô hấp:\n" +
      "   - Cảm lạnh hoặc cúm: Virus gây cảm lạnh và cúm có thể gây ho kèm theo sốt, đau họng và nhức người.\n" +
      "   - Viêm phổi: Nhiễm trùng phổi nặng cũng có thể dẫn đến ho kéo dài.\n" +
      "2. Dị ứng:\n" +
      "   - Phản ứng với phấn hoa, bụi hoặc nấm mốc có thể gây viêm và ho.\n" +
      "3. Hen suyễn:\n" +
      "   - Tình trạng bệnh lý mãn tính này có thể gây ho, đặc biệt khi tiếp xúc với các tác nhân kích thích.\n" +
      "4. Trào ngược dạ dày thực quản (GERD):\n" +
      "   - Dịch vị dạ dày trào ngược lên thực quản gây kích thích cổ họng và ho.\n" +
      "5. Khói thuốc và ô nhiễm:\n" +
      "   - Khói thuốc và các chất ô nhiễm có thể kích thích đường hô hấp.\n\n" +
      "Triệu chứng đi kèm:\n" +
      "- Ho khan hoặc ho có đờm.\n" +
      "- Khó thở hoặc cảm giác nặng ở ngực.\n" +
      "- Cơn ho có thể kéo dài và tệ hơn vào ban đêm.\n\n" +
      "Cách điều trị:\n" +
      "1. Điều trị tại nhà:\n" +
      "   - Uống nhiều nước để giữ ẩm cổ họng và giảm kích ứng.\n" +
      "   - Sử dụng viên ngậm hoặc thuốc ho để làm dịu cổ họng.\n" +
      "2. Thuốc kháng histamin:\n" +
      "   - Nếu ho do dị ứng, thuốc kháng histamin có thể giúp giảm triệu chứng.\n" +
      "3. Kháng sinh:\n" +
      "   - Nếu ho do nhiễm trùng vi khuẩn, bác sĩ có thể kê kháng sinh.\n" +
      "4. Thuốc điều trị hen suyễn:\n" +
      "   - Dùng inhaler hoặc thuốc theo chỉ định của bác sĩ nếu ho do hen suyễn.\n\n" +
      "Khi nào cần gặp bác sĩ:\n" +
      "- Nếu ho kéo dài hơn 3 tuần.\n" +
      "- Ho kèm theo triệu chứng nghiêm trọng như khó thở, sốt cao, ho có máu.\n" +
      "- Nếu bạn nghi ngờ ho do vấn đề y tế nghiêm trọng.\n\n" +
      "Hy vọng thông tin này sẽ giúp bạn hiểu rõ hơn về nguyên nhân và cách điều trị ho. Nếu có thêm câu hỏi, hãy liên hệ với tôi nhé!",
    cảm:
      "Dạ, cảm cúm là bệnh lý phổ biến, đặc biệt vào mùa lạnh, do virus cúm hoặc cảm lạnh gây ra. Dưới đây là thông tin chi tiết:\n\n" +
      "Nguyên nhân:\n" +
      "- Virus cúm (A, B, C, D) là nguyên nhân chính gây ra cảm cúm hàng năm.\n" +
      "- Virus cảm lạnh thông thường cũng có thể gây triệu chứng tương tự nhưng nhẹ hơn.\n\n" +
      "Triệu chứng:\n" +
      "- Sốt nhẹ hoặc sốt cao.\n" +
      "- Đau đầu, đau họng, và đau nhức toàn thân.\n" +
      "- Ho khan, nghẹt mũi hoặc chảy nước mũi.\n" +
      "- Mệt mỏi, khó chịu và có thể kèm theo triệu chứng tiêu hóa như nôn hoặc tiêu chảy.\n\n" +
      "Cách điều trị:\n" +
      "1. Nghỉ ngơi để cơ thể phục hồi.\n" +
      "2. Uống nhiều nước để giữ cơ thể đủ nước và giảm triệu chứng.\n" +
      "3. Thuốc giảm đau và hạ sốt: Paracetamol hoặc ibuprofen.\n" +
      "4. Thuốc ho và nhỏ mũi để giảm triệu chứng.\n\n" +
      "Phòng ngừa:\n" +
      "- Tiêm vaccine cúm hàng năm.\n" +
      "- Rửa tay thường xuyên để tránh lây nhiễm.\n" +
      "- Tránh tiếp xúc gần gũi với người bệnh.\n" +
      "- Duy trì chế độ ăn uống lành mạnh và tập thể dục để tăng cường sức đề kháng.\n\n" +
      "Khi nào cần gặp bác sĩ:\n" +
      "- Nếu triệu chứng nghiêm trọng hoặc kéo dài hơn một tuần.\n" +
      "- Khó thở, đau ngực hoặc triệu chứng bất thường.\n\n" +
      "Hy vọng thông tin này sẽ giúp ích cho bạn trong việc phòng ngừa và điều trị cảm cúm. Nếu có thắc mắc thêm, hãy liên hệ với tôi nhé!",
    "đau cổ":
      "Dạ, đau cổ là triệu chứng phổ biến và có thể do nhiều nguyên nhân khác nhau, từ căng cơ đến các tình trạng nghiêm trọng hơn. Dưới đây là các thông tin chi tiết:\n\n" +
      "Nguyên nhân gây đau cổ:\n" +
      "1. Căng cơ và căng thẳng:\n" +
      "   - Thường do tư thế xấu khi ngồi, nằm hoặc hoạt động, dẫn đến căng thẳng vào các cơ vùng cổ.\n" +
      "2. Chấn thương:\n" +
      "   - Tai nạn, va chạm hoặc ngã có thể gây đau cổ do tổn thương cấu trúc cổ hoặc đốt sống.\n" +
      "3. Hội chứng đau cổ mãn tính:\n" +
      "   - Các bệnh lý mãn tính như thoái hóa đốt sống cổ hoặc thoát vị đĩa đệm có thể gây đau cổ kéo dài.\n" +
      "4. Khó chịu do tâm lý:\n" +
      "   - Căng thẳng tinh thần có thể biểu hiện dưới dạng đau cổ.\n\n" +
      "Triệu chứng đi kèm:\n" +
      "- Đau, cứng cổ: Cảm giác đau nhức hoặc cứng ở vùng cổ, có thể hạn chế xoay cổ.\n" +
      "- Đau lan ra vai hoặc lưng: Đôi khi cơn đau có thể lan xuống vai hoặc lưng trên.\n" +
      "- Đau kèm theo triệu chứng khác: Có thể có đau đầu, tê hoặc yếu ở tay.\n\n" +
      "Cách điều trị:\n" +
      "1. Nghỉ ngơi và giảm căng thẳng:\n" +
      "   - Hạn chế các hoạt động gây đau.\n" +
      "2. Chườm nóng/lạnh:\n" +
      "   - Áp dụng nhiệt độ nóng hoặc lạnh lên vùng đau để giảm đau và viêm.\n" +
      "3. Bài tập và vật lý trị liệu:\n" +
      "   - Thực hiện bài tập nhẹ nhàng cho cổ và vai theo chỉ định của chuyên gia.\n" +
      "4. Thuốc giảm đau:\n" +
      "   - Sử dụng paracetamol hoặc ibuprofen để giảm đau.\n\n" +
      "Khi nào cần gặp bác sĩ:\n" +
      "- Nếu cơn đau kéo dài hơn một tuần mà không giảm.\n" +
      "- Nếu có triệu chứng nghiêm trọng như tê hoặc yếu tay, khó cử động cổ, hoặc sốt cao.\n\n" +
      "Hy vọng thông tin trên sẽ giúp bạn hiểu rõ hơn về tình trạng đau cổ và các phương pháp điều trị. Nếu có thêm câu hỏi, đừng ngần ngại liên hệ với tôi nhé!",
    "dị ứng":
      "Dạ, dị ứng là phản ứng quá mức của hệ miễn dịch với chất lạ mà cơ thể thường không gây hại, như phấn hoa, thực phẩm, thuốc, hoặc vật nuôi. Sau đây là thông tin chi tiết về dị ứng:\n\n" +
      "Nguyên nhân gây dị ứng:\n" +
      "- Thực phẩm: Các loại thực phẩm như đậu phộng, hạt điều, trứng, sữa, cá, và lúa mì có thể gây dị ứng.\n" +
      "- Phấn hoa: Cỏ, cây, và hoa có thể phát tán phấn hoa vào không khí, gây dị ứng mùa.\n" +
      "- Vật nuôi: Lông thú cưng, nước tiểu, hoặc nước bọt của động vật có thể gây dị ứng.\n" +
      "- Thuốc: Một số loại thuốc như kháng sinh hoặc aspirin có thể gây dị ứng.\n" +
      "- Côn trùng: Ong, muỗi, hoặc kiến có thể gây dị ứng qua vết đốt.\n\n" +
      "Triệu chứng của dị ứng:\n" +
      "- Dị ứng nhẹ: Ngứa, phát ban, đỏ da, hắt hơi, sổ mũi.\n" +
      "- Dị ứng nặng (phản ứng phản vệ): Khó thở, sưng mặt, môi, hoặc họng, nhịp tim nhanh, choáng váng hoặc mất ý thức. Đây là tình trạng khẩn cấp cần điều trị ngay lập tức.\n\n" +
      "Cách điều trị:\n" +
      "1. Tránh xa chất gây dị ứng: Xác định và tránh các yếu tố gây dị ứng.\n" +
      "2. Sử dụng thuốc:\n" +
      "   - Kháng histamin giúp giảm ngứa và sổ mũi.\n" +
      "   - Thuốc chống viêm giúp giảm viêm và khó chịu.\n" +
      "   - Epinephrine: Trong trường hợp phản ứng nặng, tiêm epinephrine có thể cứu sống.\n" +
      "3. Liệu pháp miễn dịch: Đối với một số loại dị ứng, liệu pháp miễn dịch có thể giúp giảm độ nhạy cảm đối với chất gây dị ứng.\n\n" +
      "Phòng ngừa:\n" +
      "- Xác định và ghi nhớ các chất gây dị ứng: Thực hiện ghi chú về món ăn hoặc môi trường sống để nhận thức về các chất có thể gây dị ứng.\n" +
      "- Mang theo thuốc: Người có tiền sử dị ứng nặng cần mang theo epinephrine trong trường hợp khẩn cấp.\n" +
      "- Tiêm vaccine chống dị ứng: Là lựa chọn hữu ích cho người có triệu chứng dị ứng nghiêm trọng.\n\n" +
      "Nếu bạn có thêm câu hỏi hoặc cần thông tin chi tiết về loại dị ứng nào, hãy cho tôi biết nhé!",
    "bác sĩ":
      "Mời bạn chọn bác sĩ hoặc đặt lịch khám nhanh để được hỗ trợ trực tiếp từ bác sĩ",
    "đau lưng":
      "Dạ, đau lưng là một triệu chứng khá phổ biến và có thể do nhiều nguyên nhân khác nhau. Một số nguyên nhân thường gặp có thể bao gồm:" +
      "1. Căng cơ hoặc chấn thương: Do vận động quá sức hoặc thực hiện các động tác sai tư thế." +
      "2. Thay đổi cấu trúc cột sống: Như thoát vị đĩa đệm, thoái hóa hoặc sai lệch đốt sống." +
      "3. Bệnh lý về nội tạng: Đôi khi, đau lưng có thể liên quan đến các bệnh như bệnh thận hoặc bệnh phụ khoa ở nữ giới." +
      "4. Tư thế: Ngồi hoặc đứng không đúng tư thế trong thời gian dài có thể gây ra đau lưng." +
      "5. Stress và căng thẳng: Tình trạng thần kinh căng thẳng cũng có thể góp phần vào cảm giác đau lưng." +
      "Nếu cơn đau kéo dài, ngày càng nghiêm trọng hoặc đi kèm với triệu chứng khác như khó thở, tê cứng tay chân, bạn nên tìm gặp bác sĩ để khám và chẩn đoán rõ hơn. Bác sĩ có thể yêu cầu các xét nghiệm hoặc chẩn đoán hình ảnh để xác định nguyên nhân chính xác và đưa ra phương pháp điều trị phù hợp." +
      "Ngoài ra, việc nghỉ ngơi hợp lý, tập thể dục đều đặn và giữ tư thế đúng cũng giúp giảm bớt triệu chứng đau lưng. Dạ, bạn nhớ chú ý chăm sóc bản thân và theo dõi tình trạng sức khỏe nhé!",
    "đau ngực":
      "Dạ, đau ngực là một triệu chứng cần được chú ý vì nó có thể liên quan đến nhiều vấn đề sức khỏe khác nhau, từ những điều không nghiêm trọng đến những bệnh lý nghiêm trọng như bệnh tim. Để hiểu rõ hơn về đau ngực, chúng ta có thể phân loại và xem xét một số nguyên nhân như sau:" +
      "1. Cơn đau thắt ngực: Thường do bệnh tim thiếu máu cục bộ mạn tính. Cơn đau này có thể xảy ra sau khi gắng sức hoặc khi có căng thẳng cảm xúc. Đau thường cảm nhận ở vùng sau xương ức, có thể lan ra cổ, vai, tay, và lưng. Khó thở, mệt mỏi, và các triệu chứng như buồn nôn hoặc vã mồ hôi có thể đi kèm. Thời gian cơn đau thường kéo dài từ vài phút đến 30 phút." +
      "2. Các nguyên nhân khác:" +
      "   - Bệnh lý phổi: Như viêm phổi hoặc thuyên tắc phổi có thể gây đau ngực." +
      "   - Vấn đề tiêu hóa: Như trào ngược dạ dày thực quản (GERD) có thể gây cảm giác đau và nóng rát trong ngực." +
      "   - Căng cơ hoặc chấn thương: Có thể gây đau ngực do chấn thương vùng ngực hoặc căng cơ do hoạt động." +
      "   - Stress hoặc lo âu: Kiểu đau này có thể làm bệnh nhân cảm thấy áp lực và khó thở." +
      "Nếu bạn gặp triệu chứng đau ngực kéo dài, kèm theo khó thở, mệt mỏi, hoặc các triệu chứng khác nghiêm trọng hơn như đổ mồ hôi lạnh, chóng mặt, bạn nên tìm đến bác sĩ ngay lập tức để được khám và chẩn đoán chính xác. Một cuộc kiểm tra bệnh lý phù hợp sẽ giúp định nghĩa nguyên nhân và có biện pháp điều trị thích hợp cho bạn.",
    "chóng mặt":
      "Dạ, chóng mặt là cảm giác mất cân bằng hoặc xoay chuyển có thể xảy ra trong nhiều tình huống khác nhau. Đây là một triệu chứng mà nhiều người gặp phải trong cuộc sống hàng ngày và có thể do nhiều nguyên nhân khác nhau, như:" +
      "1. Rối loạn tai trong: Tai trong giữ vai trò quan trọng trong việc duy trì cân bằng. Các vấn đề như viêm tai trong (labyrinthitis), bệnh Meniere hay chóng mặt tư thế kịch phát lành tính (BPPV) có thể gây ra triệu chứng chóng mặt." +
      "2. Huyết áp thấp: Huyết áp giảm đột ngột khi thay đổi tư thế, như đứng dậy nhanh chóng, có thể dẫn đến chóng mặt." +
      "3. Thiếu oxy: Khi cơ thể không nhận đủ oxy, ví dụ do ở trong môi trường ngột ngạt hoặc khi tập thể dục quá sức, bạn có thể cảm thấy chóng mặt." +
      "4. Mất nước hoặc thiếu dinh dưỡng: Không uống đủ nước hoặc không cung cấp đủ chất dinh dưỡng cho cơ thể cũng có thể gây ra cảm giác chóng mặt." +
      "5. Căng thẳng và lo âu: Áp lực tâm lý có thể dẫn đến cảm giác chóng mặt hoặc mất cân bằng." +
      "6. Một số loại thuốc: Một số loại thuốc có thể có tác dụng phụ là chóng mặt hoặc buồn nôn." +
      "Nếu bạn cảm thấy chóng mặt kéo dài hoặc kèm theo các triệu chứng nghiêm trọng khác như đau ngực, khó thở, hoặc mờ mắt, bạn nên tìm gặp bác sĩ để được khám và chẩn đoán. Bác sĩ có thể yêu cầu các xét nghiệm hoặc kiểm tra để xác định nguyên nhân chính xác và đưa ra các giải pháp điều trị hợp lý." +
      "Hãy chăm sóc sức khỏe của bạn và theo dõi các triệu chứng nhé!",
    "khó thở":
      "Dạ, khó thở là một triệu chứng mà nhiều người có thể gặp phải, và nó có thể xuất phát từ nhiều nguyên nhân khác nhau. Đây là một tình trạng hết sức nghiêm trọng và cần được điều tra kỹ lưỡng. Dưới đây là một số nguyên nhân phổ biến gây ra khó thở:" +
      "1. Bệnh về hệ hô hấp:" +
      "   - Hen suyễn: Làm hẹp đường hô hấp, gây khó thở, thở khò khè và ho." +
      "   - Viêm phổi: Có thể gây ra khó thở kèm theo sốt, ho và đau ngực." +
      "   - Bệnh phổi tắc nghẽn mạn tính (COPD): Là tình trạng mạn tính ảnh hưởng đến khả năng thở." +
      "2. Vấn đề về tim mạch:" +
      "   - Suy tim: Khi tim không đủ mạnh để bơm máu, có thể gây tích tụ dịch trong phổi, gây khó thở." +
      "   - Đau thắt ngực: Có thể gây cảm giác khó thở khi cơ tim không nhận đủ máu." +
      "3. Rối loạn tâm lý:" +
      "   - Căng thẳng và lo âu: Bệnh nhân có thể cảm thấy khó thở trong các tình huống căng thẳng hoặc lo âu thái quá." +
      "4. Các vấn đề khác:" +
      "   - Trào ngược dạ dày thực quản (GERD): Có thể gây khó thở do acid dạ dày tràn vào thực quản và gây kích thích." +
      "   - Béo phì: Tình trạng thừa cân có thể làm hạn chế khả năng hô hấp." +
      "Nếu bạn hoặc ai đó cảm thấy khó thở bất ngờ và nghiêm trọng, kèm theo các triệu chứng như đau ngực, chóng mặt, hoặc mờ mắt, hãy tìm kiếm sự trợ giúp y tế ngay lập tức. Việc khám và chẩn đoán kịp thời là rất quan trọng để xác định nguyên nhân và có biện pháp điều trị phù hợp." +
      "Hãy chăm sóc sức khỏe của bạn và nếu có bất kỳ nghi ngờ nào về tình trạng sức khỏe, hãy đi khám bác sĩ ngay.)",
    "ngứa da":
      "Dạ, ngứa da là một triệu chứng rất phổ biến mà có thể gây khó chịu và ảnh hưởng đến chất lượng cuộc sống của người mắc phải. Ngứa da có thể xuất hiện do nhiều nguyên nhân khác nhau, bao gồm:" +
      "1.  Tình trạng da : Các bệnh về da như eczema (viêm da dị ứng), bệnh vẩy nến, viêm da tiếp xúc hoặc mề đay có thể gây ra ngứa." +
      "2.  Dị ứng : Một số người có thể bị ngứa do dị ứng với các chất như polen, bụi, thức ăn, hoặc phấn hoa. Dị ứng với thuốc cũng có thể là nguyên nhân." +
      "3.  Nhiễm trùng : Các tình trạng nhiễm trùng da do vi khuẩn, virus hoặc nấm, như nấm da hay herpes, có thể gây ngứa." +
      "4.  Vấn đề trong cơ thể : Các bệnh lý như bệnh gan, bệnh thận, hoặc rối loạn tuyến giáp có thể gây ra ngứa da. Nghĩa là, ngứa da không phải lúc nào cũng chỉ là một vấn đề tại chỗ, mà có thể là dấu hiệu của các bệnh bên trong." +
      "5.  Mồ hôi và nóng : Mồ hôi quá nhiều hoặc khi trời nóng có thể kích thích da và gây ra cảm giác ngứa." +
      "6.  Sự thay đổi thời tiết : Thời tiết lạnh hoặc khô có thể làm khô da và dẫn đến ngứa." +
      "Khi gặp phải tình trạng ngứa da kéo dài hoặc kèm theo các triệu chứng khác như phát ban, sưng, đau hoặc cảm giác bất thường, bạn nên tìm kiếm sự tư vấn từ bác sĩ hoặc chuyên gia về da liễu để được hướng dẫn và điều trị kịp thời." +
      "Hãy chăm sóc sức khỏe của bạn và theo dõi các triệu chứng của cơ thể!",
    "đau chân":
      "Dạ, đau chân là một triệu chứng phổ biến và có thể xảy ra vì nhiều lý do khác nhau. Dưới đây là một số nguyên nhân thường gặp gây đau chân:" +
      "1.  Chấn thương : Đau có thể do chấn thương cấp tính như trật khớp, gãy xương hay các vết thương khác trong khi chơi thể thao hoặc hoạt động mạnh." +
      "2.  Vấn đề về tuần hoàn : Thiếu máu do tắc nghẽn động mạch có thể dẫn đến đau chân, thường được gọi là đau chân cách hồi. Triệu chứng là cảm giác đau khi đi bộ hoặc hoạt động, nhưng giảm bớt khi nghỉ ngơi." +
      "3.  Bệnh lý cơ xương khớp : Các tình trạng như viêm khớp, thoát vị đĩa đệm, hoặc viêm gân có thể gây ra đau nhức và khó chịu ở chân." +
      "4.  Bệnh thần kinh : Các bệnh lý liên quan đến dây thần kinh như bệnh tiểu đường có thể gây ra đau chân do tổn thương thần kinh ngoại vi." +
      "5.  Căng cơ hoặc chuột rút : Cảm giác đau có thể xảy ra khi cơ chân bị căng hoặc co rút không tự ý, thường do vận động quá sức hoặc thiếu nước." +
      "6.  Tình trạng mạch máu : Các vấn đề liên quan đến tĩnh mạch, như suy tĩnh mạch hay huyết khối tĩnh mạch sâu, cũng có thể gây đau chân." +
      "Nếu bạn gặp phải cơn đau chân kéo dài, dữ dội, hoặc kèm theo các triệu chứng khác như sưng, tê rần hoặc yếu cơ, nên tìm kiếm sự tư vấn từ bác sĩ hoặc chuyên gia y tế để có chẩn đoán chính xác và biện pháp điều trị hợp lý." +
      "Chú ý rằng các yếu tố như tuổi tác, tiền sử bệnh lý và tình hình sức khỏe hiện tại cũng rất quan trọng trong việc xác định nguyên nhân của cơn đau." +
      "Hãy chú ý đến sức khỏe của bạn và nếu có bất cứ điều gì đáng ngờ, hãy đến gặp bác sĩ để được hướng dẫn kịp thời!",
    "đau mắt":
      "Dạ, đau mắt có thể là một triệu chứng gây khó chịu và có thể xuất phát từ nhiều nguyên nhân khác nhau. Dưới đây là một số nguyên nhân phổ biến gây ra tình trạng đau mắt:" +
      "1.  Viêm kết mạc : Còn được gọi là viêm màng kết, viêm kết mạc có thể do nhiễm trùng, dị ứng hoặc kích ứng. Triệu chứng thường thấy bao gồm đỏ mắt, ngứa và có thể tiết dịch." +
      "2.  Khô mắt : Thiếu nước mắt có thể dẫn đến cảm giác khô rát, ngứa hoặc cảm giác như có cát trong mắt." +
      "3.  Đau mắt do chấn thương : Các chấn thương từ vật thể lạ hay tai nạn có thể gây ra đau nhức và cần được chẩn đoán kịp thời." +
      "4.  Nhiễm trùng : Nhiễm trùng như viêm giác mạc, viêm lộ tuyến, hoặc các vấn đề do virus (như herpes) cũng có thể gây đau mắt." +
      "5.  Tật khúc xạ : Ngoài ra, các vấn đề về thị lực như cận thị, viễn thị hoặc loạn thị cũng có thể dẫn đến đau mắt, đặc biệt khi mắt phải căng thẳng để điều chỉnh." +
      "6.  Bệnh lý liên quan đến mắt : Các bệnh lý khác như glaucoma (tăng nhãn áp) có thể tạo ra đau nhức, đi kèm với cảm giác buốt hoặc nhức đầu." +
      "7.  Ánh sáng mạnh : Tiếp xúc lâu với ánh sáng mạnh hoặc ánh nắng có thể làm mắt cảm thấy khó chịu hoặc đau." +
      "Nếu bạn gặp tình trạng đau mắt kéo dài hoặc dữ dội, kèm theo các triệu chứng như nhìn mờ, nhạy cảm với ánh sáng, sưng tấy hoặc tiết dịch ở mắt, bạn nên đến gặp bác sĩ hoặc chuyên gia về mắt để được chẩn đoán và điều trị kịp thời." +
      "Hãy bảo vệ đôi mắt của bạn và theo dõi sức khỏe của mình!",
    "tiêu chảy":
      "Dạ, tiêu chảy là tình trạng đi tiêu nhiều lần trong ngày với phân lỏng, có thể kèm theo các triệu chứng khác như đau bụng, buồn nôn, hay sốt. Đây là một triệu chứng phổ biến và có thể xuất phát từ nhiều nguyên nhân khác nhau bao gồm:" +
      "1.    Nhiễm trùng   : Tiêu chảy thường do vi khuẩn, virus hoặc ký sinh trùng gây ra. Các tác nhân gây bệnh phổ biến bao gồm rotavirus, norovirus, và vi khuẩn như Salmonella, E. coli hoặc Campylobacter." +
      "2.    Nguyên nhân gây kích ứng ruột   : Các chất gây kích ứng như thực phẩm, thuốc (chẳng hạn như kháng sinh) hoặc dị ứng thực phẩm có thể dẫn đến tiêu chảy." +
      "3.    Bệnh lý đường tiêu hóa mãn tính   : Một số bệnh như viêm ruột (Crohn's disease hoặc bệnh viêm đại tràng - ulcerative colitis) có thể gây ra tiêu chảy mãn tính." +
      "4.    Các vấn đề về tiêu hóa   : Chất lượng thực phẩm, đặc biệt là ăn uống không vệ sinh hoặc tiêu thụ các thực phẩm có chứa hóa chất gây hại, có thể xuất hiện tiêu chảy." +
      "5.    Stress   : Căng thẳng tinh thần cũng có thể gây rối loạn chức năng tiêu hóa, dẫn đến tiêu chảy." +
      "   Triệu chứng đi kèm   : Ngoài tiêu chảy, bệnh nhân có thể có các triệu chứng như đau bụng, đầy hơi, buồn nôn, hoặc sốt. Trong một số trường hợp nghiêm trọng, tiêu chảy có thể đi kèm với mất nước, dẫn đến khô miệng, khát nước, chóng mặt hoặc yếu sức." +
      "   Điều trị   : Điều trị tiêu chảy phụ thuộc vào nguyên nhân. Điều quan trọng là giữ nước và điện giải bằng cách uống dung dịch điện giải phù hợp. Trong trường hợp tiêu chảy do nhiễm trùng, nó có thể tự khỏi mà không cần điều trị bằng thuốc kháng sinh. Tuy nhiên, nếu có triệu chứng kéo dài, sốt cao, hoặc mất nước nghiêm trọng, bạn nên đến gặp bác sĩ để được chẩn đoán và điều trị kịp thời." +
      "Dạ, nếu bạn cần thêm thông tin chi tiết hơn về các nguyên nhân hay phương pháp điều trị cụ thể, vui lòng cho tôi biết!",
    "táo bón":
      "Dạ, táo bón là một rối loạn tiêu hóa phổ biến, được định nghĩa là tình trạng đi đại tiện ít hơn bình thường (thường là dưới ba lần mỗi tuần) và có phân cứng, khô hoặc gây khó khăn khi đi tiêu. Đây là vấn đề có thể gây khó chịu và ảnh hưởng đến chất lượng cuộc sống. Dưới đây là một số nguyên nhân, triệu chứng và biện pháp khắc phục táo bón:" +
      "      Nguyên nhân gây táo bón\n" +
      "1.    Chế độ ăn uống   : Thiếu chất xơ trong chế độ ăn uống (từ trái cây, rau, ngũ cốc) có thể làm chậm quá trình tiêu hóa và đi tiêu.\n" +
      "2.    Thiếu nước   : Uống nước không đủ cũng dẫn đến việc cơ thể hấp thụ quá nhiều nước từ phân, làm chúng trở nên cứng và khó di chuyển.\n" +
      "3.    Vận động   : Thiếu hoạt động thể chất có thể làm chậm quá trình tiêu hóa.\n" +
      "4.    Thay đổi thói quen   : Thay đổi môi trường, như đi du lịch hoặc thay đổi thói quen sinh hoạt, cũng có thể ảnh hưởng đến thói quen đi tiêu.\n" +
      "5.    Thuốc   : Một số loại thuốc, như thuốc chống trầm cảm, thuốc giảm đau hoặc thuốc chống dị ứng, có thể gây táo bón như một tác dụng phụ.\n" +
      "6.    Bệnh lý   : Các bệnh về hệ tiêu hóa, như triệu chứng ruột kích thích, hoặc các bệnh lý khác liên quan đến hormone có thể là nguyên nhân.\n" +
      "      Triệu chứng\n" +
      "- Đi đại tiện ít hơn ba lần mỗi tuần.\n" +
      "- Phân cứng, khô hoặc bị tắc nghẽn.\n" +
      "- Cảm giác đau đớn hoặc khó chịu khi đi tiêu.\n" +
      "- Cảm giác bụng đầy hơi hoặc không thoải mái.\n" +
      "      Biện pháp khắc phục\n" +
      "1.    Tăng cường chất xơ   : Ăn nhiều rau xanh, trái cây, và ngũ cốc nguyên hạt để tăng lượng chất xơ trong chế độ ăn uống.\n" +
      "2.    Uống đủ nước   : Đảm bảo cung cấp đủ nước cho cơ thể.\n" +
      "3.    Tập thể dục   : Duy trì hoạt động thể chất đều đặn giúp kích thích ruột hoạt động tốt hơn.\n" +
      "4.    Thay đổi thói quen   : Thiết lập lịch đi đại tiện đều đặn và tránh kiểm soát việc đi tiêu.\n" +
      "5.    Tham khảo ý kiến bác sĩ   : Nếu tình trạng táo bón kéo dài hoặc nghiêm trọng, bạn nên đến gặp bác sĩ để được tư vấn và điều trị thích hợp." +
      "Nếu bạn có bất kỳ câu hỏi nào thêm hoặc cần thêm thông tin chi tiết, vui lòng cho tôi biết!)",
    "mất ngủ":
      "Dạ, mất ngủ là tình trạng khó khăn trong việc đi vào giấc ngủ hoặc duy trì giấc ngủ, dẫn đến cảm giác không được nghỉ ngơi đầy đủ khi thức dậy. Mất ngủ có thể ảnh hưởng đến sức khỏe thể chất và tinh thần của bạn, khiến bạn gặp khó khăn trong việc tập trung, làm việc và thực hiện các hoạt động hàng ngày.\n" +
      "      Nguyên nhân gây mất ngủ\n" +
      "1.    Căng thẳng và lo âu   : Cảm xúc tiêu cực, căng thẳng trong công việc hoặc cuộc sống hàng ngày có thể làm bạn khó ngủ.\n" +
      "2.    Thói quen sinh hoạt   : Uống caffeine hoặc rượu, thiếu hoạt động thể chất, và không có lịch trình giấc ngủ cố định có thể gây mất ngủ.\n" +
      "3.    Bệnh lý   : Một số tình trạng sức khỏe như bệnh trầm cảm, rối loạn lo âu, đau mãn tính, hoặc bệnh lý như chứng ngưng thở khi ngủ cũng có thể dẫn đến mất ngủ.\n" +
      "4.    Thuốc   : Những loại thuốc như thuốc chống trầm cảm, thuốc cao huyết áp hay một số thuốc trị dị ứng có thể ảnh hưởng đến giấc ngủ.\n" +
      "5.    Môi trường ngủ   : Ánh sáng, tiếng ồn, hoặc điều kiện thời tiết không thoải mái cũng có thể làm bạn khó ngủ.\n" +
      "      Triệu chứng\n" +
      "- Khó khăn trong việc đi vào giấc ngủ.\n" +
      "- Thức dậy giữa đêm và gặp khó khăn trong việc quay lại giấc ngủ.\n" +
      "- Thức dậy quá sớm và không thể tiếp tục ngủ.\n" +
      "- Cảm thấy mệt mỏi hoặc không được nghỉ ngơi khi thức dậy.\n" +
      "      Biện pháp khắc phục\n" +
      "1.    Thay đổi lối sống   :\n" +
      "- Tạo lịch trình ngủ cố định bằng cách đi ngủ và thức dậy vào cùng một thời điểm mỗi ngày.\n" +
      "- Tăng cường vận động thể chất hàng ngày nhưng tránh tập luyện gắng sức gần giờ đi ngủ.\n" +
      "- Hạn chế caffeine và rượu, đặc biệt trong những giờ gần giờ ngủ.\n" +
      "2.    Tạo môi trường ngủ lý tưởng   :\n" +
      "- Đảm bảo phòng ngủ yên tĩnh, tối và thoải mái.\n" +
      "- Sử dụng gối và đệm thoải mái để hỗ trợ giấc ngủ tốt hơn.\n" +
      "3.    Giảm căng thẳng trước khi ngủ   :\n" +
      "- Thực hiện các hoạt động thư giãn như đọc sách, nghe nhạc nhẹ, hoặc thực hành thiền.\n" +
      "4.    Tham khảo ý kiến bác sĩ   : Nếu tình trạng mất ngủ kéo dài và ảnh hưởng nghiêm trọng tới chất lượng cuộc sống, bạn nên thảo luận với bác sĩ để tìm hiểu nguyên nhân và được tư vấn điều trị.\n" +
      "Nếu bạn cần thêm thông tin chi tiết hơn về một khía cạnh cụ thể nào đó liên quan đến mất ngủ, vui lòng cho tôi biết!",
    "khó tiêu":
      "Dạ, khó tiêu là một triệu chứng thường gặp mà nhiều người có thể trải qua. Đây có thể là cảm giác không thoải mái hoặc đau ở vùng bụng trên, và có thể đi kèm với các triệu chứng như đầy bụng, ợ chua, buồn nôn hoặc chán ăn. Dưới đây là một số thông tin liên quan đến khó tiêu và cách xử lý tình trạng này:\n\n" +
      "Nguyên nhân gây ra khó tiêu:\n" +
      "1. Chế độ ăn uống không hợp lý: Tiêu thụ thức ăn khó tiêu, béo, gia vị cay hoặc uống rượu, cà phê.\n\n" +
      "2. Tiêu hóa kém: Khi thức ăn không được tiêu hóa đúng cách có thể gây cảm giác đầy bụng.\n\n" +
      "3. Lo âu hoặc căng thẳng: Tình trạng tâm lý cũng có thể gây ra khó tiêu.\n\n" +
      "4. Bệnh lý tiêu hóa: Các bệnh như loét dạ dày, trào ngược dạ dày thực quản (GERD) hoặc viêm dạ dày.\n\n" +
      "5. Sử dụng thuốc: Một số loại thuốc như NSAID và kháng sinh có thể gây khó tiêu.\n\n" +
      "Triệu chứng đi kèm:\n" +
      "- Đau hoặc khó chịu ở bụng trên.\n" +
      "- Cảm giác đầy bụng hoặc chướng bụng.\n" +
      "- Ợ nóng hoặc ợ chua.\n" +
      "- Buồn nôn hoặc cảm giác nôn.\n\n" +
      "Cách xử lý khi gặp phải khó tiêu:\n" +
      "1. Thay đổi chế độ ăn uống: Hạn chế thức ăn béo, cay, chua hoặc đồ uống có gas. Thưởng thức bữa ăn nhỏ hơn nhưng thường xuyên hơn để giảm áp lực lên dạ dày.\n\n" +
      "2. Uống nhiều nước: Giúp tiêu hóa tốt hơn, nhưng nên tránh uống quá nhiều trong bữa ăn.\n\n" +
      "3. Thư giãn và giảm stress: Thực hiện các bài tập thư giãn như yoga hoặc thiền có thể giúp cải thiện tình trạng.\n\n" +
      "4. Sử dụng thuốc giảm triệu chứng: Có thể cân nhắc sử dụng thuốc giảm đau hoặc thuốc hỗ trợ tiêu hóa nhưng nên tham khảo ý kiến bác sĩ trước khi dùng.\n\n" +
      "5. Theo dõi tình hình sức khỏe: Nếu triệu chứng kéo dài hoặc nghiêm trọng hơn, bạn nên đến gặp bác sĩ để được tư vấn và điều trị kịp thời.\n\n" +
      "Khi nào nên gặp bác sĩ:\n" +
      "- Khó tiêu kéo dài hơn vài tuần.\n" +
      "- Có kèm theo các triệu chứng nghiêm trọng như nôn ra máu, đau bụng dữ dội, hoặc giảm cân không rõ lý do.",
    "phát ban":
      "Phát ban có thể do dị ứng hoặc nhiễm trùng. Tránh tiếp xúc với các chất gây dị ứng và tham khảo ý kiến bác sĩ.",
    sốt:
      "Sốt có thể là dấu hiệu của nhiễm trùng. Nghỉ ngơi và uống đủ nước. Nếu sốt kéo dài, hãy đi khám.",
    "tức ngực":
      "Tức ngực có thể liên quan đến hô hấp hoặc tim mạch. Nếu tức ngực không giảm, hãy đi khám ngay.",
    "chảy máu cam":
      "Chảy máu cam có thể do mạch máu mũi yếu hoặc không khí khô. Cố gắng giữ ẩm mũi và tránh ngoáy mũi.",
    "đau hông":
      "Đau hông có thể do căng cơ hoặc chấn thương. Nghỉ ngơi và hạn chế vận động mạnh có thể giúp giảm đau.",
    "nôn mửa":
      "Nôn mửa có thể do ngộ độc thực phẩm hoặc nhiễm trùng. Nghỉ ngơi và uống nước từng chút một để tránh mất nước.",
    "ho ra máu":
      "Ho ra máu là triệu chứng nghiêm trọng. Hãy đi khám bác sĩ ngay để kiểm tra nguyên nhân.",
    "run tay chân":
      "Run tay chân có thể do lo âu hoặc hạ đường huyết. Nghỉ ngơi và ăn nhẹ có thể giúp cải thiện.",
    "đau cổ tay":
      "Đau cổ tay có thể do hoạt động lặp lại nhiều lần. Nghỉ ngơi và giảm bớt sử dụng cổ tay.",
    "đau bụng dưới":
      "Đau bụng dưới có thể do kinh nguyệt hoặc nhiễm trùng. Nếu kéo dài, nên đi khám.",
    "đau cánh tay":
      "Đau cánh tay có thể do căng cơ hoặc chấn thương. Nghỉ ngơi và tránh nâng vật nặng có thể giúp giảm đau.",
    "khàn tiếng":
      "Khàn tiếng có thể do viêm họng hoặc sử dụng giọng nói quá mức. Nghỉ ngơi và uống nước ấm.",
    "ngứa mắt":
      "Ngứa mắt có thể do dị ứng hoặc khô mắt. Tránh dụi mắt và sử dụng thuốc nhỏ mắt nếu cần.",
    "khô miệng":
      "Khô miệng có thể do thiếu nước hoặc dùng thuốc. Uống nước thường xuyên có thể giúp cải thiện.",
    "đau bụng trên":
      "Đau bụng trên có thể liên quan đến dạ dày hoặc gan. Nếu kéo dài, nên đi khám.",
    "đau vai":
      "Đau vai có thể do căng cơ hoặc chấn thương. Nghỉ ngơi và giảm vận động vai có thể giúp giảm đau.",
    "đầy hơi":
      "Dạ, đầy hơi (hay còn gọi là chứng chướng bụng) là tình trạng tích tụ khí trong hệ tiêu hóa, khiến bụng cảm thấy đầy hoặc căng. Tình trạng này có thể gây cảm giác khó chịu, đau bụng, cảm giác nặng nề hoặc ợ chua. Dưới đây là một số nguyên nhân phổ biến và phương pháp khắc phục tình trạng đầy hơi:\n\n" +
      "      Nguyên nhân gây đầy hơi:\n" +
      "1. Chế độ ăn uống:\n" +
      "- Tiêu thụ thực phẩm chứa nhiều chất xơ, chẳng hạn như đậu, bắp cải, bông cải xanh, và một số loại trái cây như táo, lê.\n" +
      "- Sử dụng đồ uống có ga, rượu hoặc thức uống có caffeine.\n" +
      "- Ăn uống nhanh, nuốt phải không khí.\n" +
      "- Thực phẩm có chứa lactose hoặc gluten nếu bạn có tình trạng không dung nạp chúng.\n\n" +
      "2. Bệnh lý tiêu hóa:\n" +
      "- Hội chứng ruột kích thích (IBS).\n" +
      "- Viêm dạ dày hoặc loét dạ dày.\n" +
      "- Các bệnh lý như tiểu đường hoặc suy giáp gây chậm tiêu hóa.\n\n" +
      "3. Yếu tố tâm lý:\n" +
      "- Stress và lo âu có thể ảnh hưởng đến hệ tiêu hóa và gây đầy hơi.\n\n" +
      "      Phương pháp giảm đầy hơi:\n" +
      "1. Thay đổi chế độ ăn uống:\n" +
      "- Giảm tiêu thụ thực phẩm dễ gây đầy hơi như nước ngọt có ga, thực phẩm chiên hoặc quá nhiều chất xơ.\n" +
      "- Ăn thực phẩm lên men như sữa chua, kim chi, hoặc dưa cải để hỗ trợ hệ tiêu hóa.\n\n" +
      "2. Uống trà thảo dược:\n" +
      "- Trà gừng, trà bạc hà hoặc trà hoa cúc có thể giúp làm dịu dạ dày và giảm cảm giác đầy hơi.\n\n" +
      "3. Tập thể dục:\n" +
      "- Các bài tập nhẹ nhàng như đi bộ hoặc yoga có thể giúp kích thích tiêu hóa và giảm cảm giác đầy bụng.\n\n" +
      "4. Giảm stress:\n" +
      "- Thực hành các kỹ thuật thư giãn như thiền, yoga hoặc các bài tập hít thở sâu có thể giúp giảm mức độ stress và cải thiện chức năng tiêu hóa.\n\n" +
      "5. Tham khảo ý kiến bác sĩ:\n" +
      "- Nếu tình trạng đầy hơi xảy ra thường xuyên kèm theo triệu chứng khác như đau bụng nghiêm trọng, tiêu chảy, hoặc giảm cân không rõ nguyên nhân, hãy đến gặp bác sĩ để kiểm tra và điều trị kịp thời.",
    "chảy mồ hôi nhiều":
      "Chảy mồ hôi nhiều có thể do căng thẳng hoặc bệnh lý. Nếu đổ mồ hôi quá mức, nên đi khám.",
    "căng thẳng":
      "Căng thẳng có thể ảnh hưởng đến sức khỏe toàn thân. Nghỉ ngơi và thực hành các kỹ thuật thư giãn như thiền hoặc yoga.",
    "đau lưỡi":
      "Đau lưỡi có thể do tổn thương, nhiệt miệng hoặc thiếu vitamin. Nếu kéo dài, hãy đi khám bác sĩ.",
    "sưng chân":
      "Sưng chân có thể do phù nề hoặc vấn đề về tuần hoàn. Nghỉ ngơi và nâng cao chân có thể giúp giảm sưng.",
    "mất khứu giác":
      "Mất khứu giác có thể do nhiễm trùng hoặc các bệnh về mũi. Nếu kéo dài, hãy đi khám chuyên khoa tai mũi họng.",
    "mất vị giác":
      "Mất vị giác có thể do nhiễm trùng hoặc thiếu hụt dinh dưỡng. Nếu kéo dài, nên đi khám bác sĩ.",
    "mắt nháy liên tục":
      "Mắt nháy liên tục có thể do căng thẳng hoặc thiếu ngủ. Nghỉ ngơi và thư giãn mắt có thể giúp giảm triệu chứng.",
    "buồn ngủ quá mức":
      "Buồn ngủ quá mức có thể do thiếu ngủ hoặc rối loạn giấc ngủ. Nếu kéo dài, hãy xem xét điều chỉnh lại lịch ngủ.",
    "mắt đỏ":
      "Mắt đỏ có thể do viêm kết mạc hoặc mỏi mắt. Rửa sạch mắt và tránh dụi mắt có thể giúp cải thiện.",
    "đau xương":
      "Đau xương có thể do thiếu canxi hoặc chấn thương. Nếu cơn đau kéo dài, hãy đi khám bác sĩ để kiểm tra.",
    "tê tay chân":
      "Tê tay chân có thể do vấn đề tuần hoàn hoặc thần kinh. Nếu triệu chứng kéo dài, hãy đi khám chuyên khoa.",
    "khó nuốt":
      "Khó nuốt có thể do viêm họng hoặc các vấn đề về thực quản. Nếu kéo dài, hãy tham khảo ý kiến bác sĩ.",
    "chảy nước mắt không ngừng":
      "Chảy nước mắt không ngừng có thể do kích ứng hoặc viêm nhiễm. Rửa mắt nhẹ nhàng và tránh chạm vào mắt.",
    "khó tập trung":
      "Khó tập trung có thể do căng thẳng hoặc thiếu ngủ. Nghỉ ngơi đầy đủ và thư giãn có thể giúp cải thiện.",
    "ngứa họng":
      "Ngứa họng có thể do dị ứng hoặc viêm họng. Uống nước ấm và tránh tiếp xúc với các chất gây dị ứng.",
    "đau bàn chân":
      "Đau bàn chân có thể do viêm gân hoặc căng cơ. Nghỉ ngơi và giãn cơ có thể giúp giảm đau.",
    "suy giảm trí nhớ":
      "Suy giảm trí nhớ có thể do căng thẳng hoặc thiếu ngủ. Giữ tâm lý thoải mái và bổ sung vitamin cho trí não.",
    "chảy máu chân răng":
      "Chảy máu chân răng có thể do viêm lợi hoặc thiếu vitamin. Vệ sinh răng miệng và ăn uống đủ chất.",
    "đau cơ":
      "Đau cơ có thể do tập luyện quá sức hoặc căng thẳng. Nghỉ ngơi và giãn cơ có thể giúp giảm đau.",
    "khó mở mắt vào buổi sáng":
      "Khó mở mắt vào buổi sáng có thể do khô mắt hoặc mỏi mắt. Uống nhiều nước và rửa mắt có thể giúp cải thiện.",
    "đau thái dương":
      "Đau thái dương có thể do căng thẳng hoặc viêm xoang. Nghỉ ngơi và thư giãn có thể giúp giảm triệu chứng.",
    "Đau ngực":
      "Đau ngực có thể do căng cơ hoặc vấn đề tim mạch. Nếu đau dữ dội hoặc khó thở, hãy đi khám ngay lập tức.",
    "Khó thở":
      "Khó thở có thể do căng thẳng, hen suyễn hoặc nhiễm trùng. Nghỉ ngơi và thở sâu, nếu kéo dài, nên gặp bác sĩ.",
    "nổi mẩn đỏ":
      "Nổi mẩn đỏ có thể do dị ứng hoặc viêm nhiễm. Tránh tiếp xúc với tác nhân gây dị ứng và theo dõi tình trạng.",
    "rát họng":
      "Rát họng có thể do viêm họng hoặc kích ứng. Uống nước ấm và tránh thức ăn cay, nếu kéo dài, nên đi khám.",
    "sốt nhẹ":
      "Sốt nhẹ có thể do nhiễm virus hoặc căng thẳng. Nghỉ ngơi và uống đủ nước, nếu sốt cao hoặc kéo dài, nên đi khám.",
    "sốt cao":
      "Sốt cao có thể là dấu hiệu nhiễm trùng. Hãy uống đủ nước, nghỉ ngơi, và đi khám nếu sốt không giảm.",
    "ho khan":
      "Ho khan có thể do cảm lạnh hoặc dị ứng. Uống nước ấm và tránh tiếp xúc với tác nhân gây dị ứng.",
    "run tay":
      "Run tay có thể do căng thẳng hoặc thiếu dinh dưỡng. Nếu triệu chứng kéo dài hoặc nặng thêm, hãy tham khảo bác sĩ.",
    "đau ngón tay":
      "Đau ngón tay có thể do chấn thương hoặc viêm khớp. Nghỉ ngơi và tránh sử dụng quá mức.",
    "đổ mồ hôi lạnh":
      "Đổ mồ hôi lạnh có thể do hạ đường huyết hoặc căng thẳng. Nếu lặp lại, bạn nên kiểm tra sức khỏe.",
    "khô môi":
      "Khô môi có thể do thiếu nước hoặc thời tiết khô. Uống nhiều nước và dùng kem dưỡng môi.",
    "buồn nôn":
      "Buồn nôn có thể do rối loạn tiêu hóa hoặc say tàu xe. Nghỉ ngơi và tránh thực phẩm dầu mỡ.",
    "ngủ gà":
      "Ngủ gà có thể do thiếu ngủ hoặc vấn đề thần kinh. Điều chỉnh lại giấc ngủ và nghỉ ngơi.",
    "Đau bụng dưới":
      "Đau bụng dưới có thể liên quan đến tiêu hóa hoặc phụ khoa. Nếu đau kéo dài, hãy đi khám bác sĩ.",
    "Đau lưng":
      "Đau lưng có thể do căng cơ hoặc tư thế sai. Nghỉ ngơi và điều chỉnh tư thế.",
    "rối loạn tiêu hóa":
      "Rối loạn tiêu hóa có thể do ăn uống không hợp lý hoặc căng thẳng. Ăn uống khoa học và giảm căng thẳng.",
    "Ngứa da":
      "Ngứa da có thể do dị ứng hoặc khô da. Tránh gãi và dùng kem dưỡng ẩm.",
    "Táo bón":
      "Táo bón có thể do thiếu chất xơ hoặc ít vận động. Bổ sung rau quả và uống đủ nước.",
    " Đau bụng trên":
      "Đau bụng trên có thể do vấn đề về dạ dày hoặc gan. Nếu kéo dài, nên đi khám.",
    "Đau đầu gối":
      "Đau đầu gối có thể do chấn thương hoặc viêm khớp. Nghỉ ngơi và tránh vận động mạnh có thể giúp giảm đau.",
    "Đau cổ":
      "Đau cổ có thể do tư thế sai hoặc căng cơ. Nghỉ ngơi và thực hiện các bài tập giãn cơ có thể giúp cải thiện.",
    "Chảy nước mũi":
      "Chảy nước mũi có thể do cảm lạnh hoặc dị ứng. Uống nước ấm và tránh tiếp xúc với tác nhân gây dị ứng.",
    "đau bụng kinh":
      "Dạ, đau bụng kinh là một triệu chứng phổ biến mà nhiều phụ nữ gặp phải trước hoặc trong chu kỳ kinh nguyệt. Dưới đây là một số biện pháp bạn có thể áp dụng để giảm đau bụng kinh:\n\n" +
      "1. Nghỉ ngơi và thư giãn: Khi cảm thấy đau, nghỉ ngơi có thể giúp giảm bớt cơn đau. Nên tìm một vị trí thoải mái để nghỉ ngơi.\n\n" +
      "2. Chườm nóng: Sử dụng túi chườm nóng hoặc khăn ấm chườm lên bụng dưới có thể giúp giảm co thắt cơ và làm dịu cơn đau.\n\n" +
      "3. Thuốc giảm đau: Sử dụng thuốc giảm đau không kê đơn như ibuprofen hoặc paracetamol để giảm đau bụng. Tuy nhiên, hãy tham khảo ý kiến bác sĩ nếu bạn có bất kỳ điều kiện sức khỏe nào.\n\n" +
      "4. Tập thể dục nhẹ nhàng: Các bài tập nhẹ như đi bộ hoặc yoga có thể giúp tăng cường lưu thông máu và làm giảm cơn đau.\n\n" +
      "5. Điều chỉnh chế độ ăn uống: Hạn chế thức ăn có chứa caffeine, muối và đường. Thay vào đó, bổ sung thực phẩm giàu omega-3 (như cá, hạt lanh) có thể giúp giảm viêm.\n\n" +
      "6. Uống nhiều nước: Uống đủ nước và các loại trà thảo dược như trà gừng hoặc trà bạc hà có thể giúp làm giảm triệu chứng đau bụng.\n\n" +
      "7. Xem xét các phương pháp điều trị khác: Nếu đau bụng kinh của bạn nghiêm trọng hoặc xảy ra thường xuyên, hãy tham khảo ý kiến bác sĩ. Họ có thể xem xét thêm các lựa chọn điều trị như liệu pháp hormone hoặc thuốc kê đơn.\n\n" +
      "8. Thực hiện các biện pháp giảm stress: Thực hành các bài tập thư giãn như yoga, thiền, hoặc phương pháp thở sâu có thể giúp làm giảm mức độ stress và giảm đau.\n\n" +
      "Nếu các biện pháp trên không giúp được nhiều hoặc cơn đau trở nên nghiêm trọng hơn, bạn nên đến gặp bác sĩ để được khám và chẩn đoán cụ thể hơn.",
    "Mệt mỏi mãn tính":
      "Mệt mỏi mãn tính có thể do thiếu ngủ hoặc stress. Cần nghỉ ngơi và điều chỉnh lối sống.",
    "Khó thở khi nằm":
      "Khó thở khi nằm có thể do vấn đề tim mạch hoặc hô hấp. Nếu kéo dài, hãy đi khám ngay.",
    "Đau tai":
      "Đau tai có thể do nhiễm trùng hoặc áp lực. Nếu cơn đau kéo dài, hãy đi khám bác sĩ.",
    "Đau dạ dày":
      "Đau dạ dày có thể do viêm loét hoặc trào ngược dạ dày thực quản. Nếu kéo dài, hãy đi khám.",
    "Rối loạn ăn uống":
      "Rối loạn ăn uống có thể do căng thẳng hoặc vấn đề tâm lý. Cần tìm kiếm sự hỗ trợ từ chuyên gia.",
    "Khó khăn trong việc đi lại":
      "Khó khăn trong việc đi lại có thể do chấn thương hoặc vấn đề về khớp. Nghỉ ngơi và tham khảo ý kiến bác sĩ.",
    "Nổi mụn nước":
      "Nổi mụn nước có thể do dị ứng hoặc nhiễm virus. Tránh gãi và theo dõi tình trạng.",
    "Cảm giác nặng nề ở chân":
      "Cảm giác nặng nề ở chân có thể do tuần hoàn kém. Nghỉ ngơi và nâng cao chân có thể giúp cải thiện.",
    "Mất cân bằng":
      "Mất cân bằng có thể do vấn đề thần kinh hoặc tai trong. Nếu kéo dài, hãy đi khám bác sĩ.",
    "Đau lưng dưới":
      "Đau lưng dưới có thể do chấn thương hoặc căng cơ. Nghỉ ngơi và tránh nâng vật nặng có thể giúp giảm đau.",
    "Đau bụng bên trái":
      "Đau bụng bên trái có thể liên quan đến lách hoặc ruột. Nếu kéo dài, hãy đi khám.",
    "Cảm giác nóng rát ở da":
      "Cảm giác nóng rát ở da có thể do dị ứng hoặc viêm nhiễm. Tránh tiếp xúc với các tác nhân gây dị ứng.",
    "Đau ngực trái":
      "Đau ngực trái có thể liên quan đến tim hoặc phổi. Nếu đau dữ dội, hãy đi khám ngay lập tức.",
    "Mắt nhìn mờ":
      "Mắt nhìn mờ có thể do mỏi mắt hoặc vấn đề về thị lực. Nghỉ ngơi và kiểm tra mắt có thể giúp cải thiện.",
    "Khó tiêu hóa":
      "Khó tiêu hóa có thể do ăn uống không hợp lý. Ăn uống khoa học và tránh thức ăn khó tiêu có thể giúp cải thiện.",
    "đặt lịch khám":
      "Dạ, để đặt lịch đăng ký khám bệnh tại phòng khám Đà Nẵng - Đa Khoa Chất Lượng Cao, bạn có thể thực hiện theo các bước sau:\n\n " +
      "1. Điền thông tin cá nhân: Bạn cần cung cấp các thông tin như Họ tên, Năm Sinh, Số điện thoại, Địa chỉ, Ngày tới khám, và bất kỳ yêu cầu đặc biệt nào khác (nếu có).\n" +
      "2. Mời Bạn chọn đăng kí lịch khám nhanh bấm vào link đăng ký bên dưới: Bạn có thể đăng ký khám chữa bệnh qua đường link đã chọn.\n\nNếu bạn cần hỗ trợ thêm, vui lòng cho tôi biết!",
    "đặt lịch":
      "Dạ, để đặt lịch đăng ký khám bệnh tại phòng khám Đà Nẵng - Đa Khoa Chất Lượng Cao, bạn có thể thực hiện theo các bước sau:\n\n " +
      "1. Điền thông tin cá nhân: Bạn cần cung cấp các thông tin như Họ tên, Năm Sinh, Số điện thoại, Địa chỉ, Ngày tới khám, và bất kỳ yêu cầu đặc biệt nào khác (nếu có).\n" +
      "2. Mời Bạn chọn đăng kí lịch khám nhanh bấm vào link đăng ký bên dưới: Bạn có thể đăng ký khám chữa bệnh qua đường link đã chọn.\n\nNếu bạn cần hỗ trợ thêm, vui lòng cho tôi biết!",
    "đặt khám ngay":
      "Dạ, để đặt lịch đăng ký khám bệnh tại phòng khám Đà Nẵng - Đa Khoa Chất Lượng Cao, bạn có thể thực hiện theo các bước sau:\n\n " +
      "1. Điền thông tin cá nhân: Bạn cần cung cấp các thông tin như Họ tên, Năm Sinh, Số điện thoại, Địa chỉ, Ngày tới khám, và bất kỳ yêu cầu đặc biệt nào khác (nếu có).\n" +
      "2. Mời Bạn chọn đăng kí lịch khám nhanh bấm vào link đăng ký bên dưới: Bạn có thể đăng ký khám chữa bệnh qua đường link đã chọn.\n\nNếu bạn cần hỗ trợ thêm, vui lòng cho tôi biết!",
    "đặt khám nhanh":
      "Dạ, để đặt lịch đăng ký khám bệnh tại phòng khám Đà Nẵng - Đa Khoa Chất Lượng Cao, bạn có thể thực hiện theo các bước sau:\n\n " +
      "1. Điền thông tin cá nhân: Bạn cần cung cấp các thông tin như Họ tên, Năm Sinh, Số điện thoại, Địa chỉ, Ngày tới khám, và bất kỳ yêu cầu đặc biệt nào khác (nếu có).\n" +
      "2. Mời Bạn chọn đăng kí lịch khám nhanh bấm vào link đăng ký bên dưới: Bạn có thể đăng ký khám chữa bệnh qua đường link đã chọn.\n\nNếu bạn cần hỗ trợ thêm, vui lòng cho tôi biết!",
    "đặt khám":
      "Dạ, để đặt lịch đăng ký khám bệnh tại phòng khám Đà Nẵng - Đa Khoa Chất Lượng Cao, bạn có thể thực hiện theo các bước sau:\n\n " +
      "1. Điền thông tin cá nhân: Bạn cần cung cấp các thông tin như Họ tên, Năm Sinh, Số điện thoại, Địa chỉ, Ngày tới khám, và bất kỳ yêu cầu đặc biệt nào khác (nếu có).\n" +
      "2. Mời Bạn chọn đăng kí lịch khám nhanh bấm vào link đăng ký bên dưới: Bạn có thể đăng ký khám chữa bệnh qua đường link đã chọn.\n\nNếu bạn cần hỗ trợ thêm, vui lòng cho tôi biết!",
    "thời gian làm việc của phòng khám":
      "Dạ, thời gian làm việc của Bệnh viện Đà Nẵng - Đa Khoa Chất Lượng Cao như sau:" +
      "1. Thời gian làm việc mùa hè (từ 16 tháng 4 đến hết ngày 15 tháng 10):" +
      "Buổi sáng: từ 6h30 đến 11h00" +
      "Buổi chiều: từ 13h30 đến 17h00" +
      "2. Thời gian làm việc mùa đông (từ 16 tháng 10 đến hết ngày 15 tháng 4 năm tiếp theo):" +
      "Buổi sáng: từ 7h00 đến 11h30" +
      "Buổi chiều: từ 13h30 đến 17h00" +
      "Ngoài giờ hành chính, Bệnh viện vẫn tiếp đón bệnh nhân cấp cứu theo quy định của Bộ Y tế. Nếu bạn cần thêm thông tin, vui lòng cho tôi biết!",
    "thời gian làm việc":
      "Dạ, thời gian làm việc của Bệnh viện Đà Nẵng - Đa Khoa Chất Lượng Cao như sau:" +
      "1. Thời gian làm việc mùa hè (từ 16 tháng 4 đến hết ngày 15 tháng 10):" +
      "Buổi sáng: từ 6h30 đến 11h00" +
      "Buổi chiều: từ 13h30 đến 17h00" +
      "2. Thời gian làm việc mùa đông (từ 16 tháng 10 đến hết ngày 15 tháng 4 năm tiếp theo):" +
      "Buổi sáng: từ 7h00 đến 11h30" +
      "Buổi chiều: từ 13h30 đến 17h00" +
      "Ngoài giờ hành chính, Bệnh viện vẫn tiếp đón bệnh nhân cấp cứu theo quy định của Bộ Y tế. Nếu bạn cần thêm thông tin, vui lòng cho tôi biết!",
    "giờ làm việc":
      "Dạ, thời gian làm việc của Bệnh viện Đà Nẵng - Đa Khoa Chất Lượng Cao như sau:" +
      "1. Thời gian làm việc mùa hè (từ 16 tháng 4 đến hết ngày 15 tháng 10):" +
      "Buổi sáng: từ 6h30 đến 11h00" +
      "Buổi chiều: từ 13h30 đến 17h00" +
      "2. Thời gian làm việc mùa đông (từ 16 tháng 10 đến hết ngày 15 tháng 4 năm tiếp theo):" +
      "Buổi sáng: từ 7h00 đến 11h30" +
      "Buổi chiều: từ 13h30 đến 17h00" +
      "Ngoài giờ hành chính, Bệnh viện vẫn tiếp đón bệnh nhân cấp cứu theo quy định của Bộ Y tế. Nếu bạn cần thêm thông tin, vui lòng cho tôi biết!",
    "Tạm biệt":
      "Dạ, tạm biệt bạn! Nếu bạn có bất kỳ câu hỏi nào khác trong tương lai hoặc cần sự trợ giúp, hãy quay lại nhé. Chúc bạn một ngày tốt lành!",
    "tạm biệt":
      "Dạ, tạm biệt bạn! Nếu bạn có bất kỳ câu hỏi nào khác trong tương lai hoặc cần sự trợ giúp, hãy quay lại nhé. Chúc bạn một ngày tốt lành!",
    "Tiểu đường":
      "Dạ, nếu bạn bị tiểu đường, hãy chú ý:" +
      "Chế độ ăn uống: Ăn nhiều rau, trái cây tươi, ngũ cốc; hạn chế đường; chia nhỏ bữa ăn." +
      "Tập thể dục: Vận động ít nhất 150 phút mỗi tuần, tránh ngồi lâu." +
      "Theo dõi đường huyết: Kiểm tra và ghi chép kết quả thường xuyên." +
      "Uống đủ nước: Đảm bảo uống nhiều nước hàng ngày." +
      "Tuân thủ điều trị: Dùng thuốc theo chỉ định và khám định kỳ." +
      "Giảm căng thẳng: Thực hiện thiền, yoga, và các hoạt động giải trí." +
      "Khám định kỳ: Kiểm tra mắt, chân và các cơ quan khác để phát hiện sớm biến chứng.",
    "tiểu đường":
      "Dạ, nếu bạn bị tiểu đường, hãy chú ý:" +
      "Chế độ ăn uống: Ăn nhiều rau, trái cây tươi, ngũ cốc; hạn chế đường; chia nhỏ bữa ăn." +
      "Tập thể dục: Vận động ít nhất 150 phút mỗi tuần, tránh ngồi lâu." +
      "Theo dõi đường huyết: Kiểm tra và ghi chép kết quả thường xuyên." +
      "Uống đủ nước: Đảm bảo uống nhiều nước hàng ngày." +
      "Tuân thủ điều trị: Dùng thuốc theo chỉ định và khám định kỳ." +
      "Giảm căng thẳng: Thực hiện thiền, yoga, và các hoạt động giải trí." +
      "Khám định kỳ: Kiểm tra mắt, chân và các cơ quan khác để phát hiện sớm biến chứng.",
    "Dấu hiệu nhận biết về tiểu đường":
      "Dạ, dấu hiệu nhận biết tiểu đường có thể khác nhau tùy thuộc vào từng người, nhưng có một số triệu chứng phổ biến mà bạn có thể chú ý như sau:" +
      "1. Khát nước nhiều: Cảm giác khát nước thường xuyên không thể giảm đi, ngay cả khi bạn đã uống nước." +
      "2. Tiểu nhiều: Thường xuyên đi tiểu, đặc biệt là vào ban đêm." +
      "3. Đói bụng: Cảm thấy đói dù đã ăn đủ bữa." +
      "4. Giảm cân: Giảm cân không rõ lý do mặc dù có cảm giác đói nhiều." +
      "5. Mệt mỏi: Cảm thấy kiệt sức và không có năng lượng." +
      "6. Thị lực mờ: Gặp khó khăn trong việc nhìn rõ, có thể thấy mờ hoặc bị nhòe." +
      "7. Lâu lành vết thương: Các vết thương và nhiễm trùng lâu lành hơn bình thường." +
      "8. Tê hoặc ngứa: Có thể cảm thấy tê bì hoặc ngứa râm ran ở tay hoặc chân." +
      "Nếu bạn hoặc người thân của bạn gặp phải một hoặc nhiều triệu chứng như trên, hãy tham khảo ý kiến bác sĩ để được kiểm tra và chẩn đoán chính xác về tình trạng sức khỏe của mình. Dạ, hy vọng thông tin này sẽ hữu ích cho bạn!",
    "dấu hiệu nhận biết về tiểu đường":
      "Dạ, dấu hiệu nhận biết tiểu đường có thể khác nhau tùy thuộc vào từng người, nhưng có một số triệu chứng phổ biến mà bạn có thể chú ý như sau:" +
      "1. Khát nước nhiều: Cảm giác khát nước thường xuyên không thể giảm đi, ngay cả khi bạn đã uống nước." +
      "2. Tiểu nhiều: Thường xuyên đi tiểu, đặc biệt là vào ban đêm." +
      "3. Đói bụng: Cảm thấy đói dù đã ăn đủ bữa." +
      "4. Giảm cân: Giảm cân không rõ lý do mặc dù có cảm giác đói nhiều." +
      "5. Mệt mỏi: Cảm thấy kiệt sức và không có năng lượng." +
      "6. Thị lực mờ: Gặp khó khăn trong việc nhìn rõ, có thể thấy mờ hoặc bị nhòe." +
      "7. Lâu lành vết thương: Các vết thương và nhiễm trùng lâu lành hơn bình thường." +
      "8. Tê hoặc ngứa: Có thể cảm thấy tê bì hoặc ngứa râm ran ở tay hoặc chân." +
      "Nếu bạn hoặc người thân của bạn gặp phải một hoặc nhiều triệu chứng như trên, hãy tham khảo ý kiến bác sĩ để được kiểm tra và chẩn đoán chính xác về tình trạng sức khỏe của mình. Dạ, hy vọng thông tin này sẽ hữu ích cho bạn!",
    "dấu hiệu nhận biết của bệnh cao huyết áp":
      "Dạ, nếu bạn bị cao huyết áp, có một số dấu hiệu bạn có thể nhận biết: đau đầu, chóng mặt, ngực khó chịu, mệt mỏi, khó thở, và đôi khi chảy máu cam.\n\n",
    "dấu hiệu nhận biết của bệnh viêm gan":
      "Dạ, nếu bạn bị viêm gan, các dấu hiệu có thể bao gồm: mệt mỏi, vàng da, vàng mắt, đau vùng bụng trên bên phải, buồn nôn, và sụt cân.\n\n",
    "viêm gan":
      "Dạ, viêm gan là tình trạng viêm nhiễm ở gan, có thể do nhiều nguyên nhân khác nhau, trong đó các loại viêm gan virus là phổ biến nhất. Dưới đây là tổng quan về các loại viêm gan cũng như các thông tin liên quan:\n\n" +
      "Các loại viêm gan:\n\n" +
      "1. Viêm gan virus:\n" +
      "   - Viêm gan virus A (HAV): Thường lây truyền qua thực phẩm hoặc nước bị ô nhiễm. Thường có triệu chứng nhẹ và thường tự khỏi.\n" +
      "   - Viêm gan virus B (HBV): Lây truyền qua máu, quan hệ tình dục không an toàn hoặc từ mẹ sang con. Có thể trở thành mãn tính và dẫn đến xơ gan hoặc ung thư gan. Triệu chứng bao gồm mệt mỏi, sốt, vàng da, và có thể dẫn đến suy gan trong trường hợp nặng.\n" +
      "   - Viêm gan virus C (HCV): Tương tự như HBV, thường lây qua đường máu. Nhiều người không có triệu chứng, nhưng có thể dẫn đến xơ gan và các biến chứng khác như ung thư gan.\n\n" +
      "2. Viêm gan do nguyên nhân khác:\n" +
      "   - Viêm gan do rượu: Lạm dụng rượu lâu dài có thể gây tổn thương gan và viêm gan mạn tính.\n" +
      "   - Viêm gan tự miễn: Hệ miễn dịch tấn công các tế bào gan của cơ thể.\n" +
      "   - Viêm gan do thuốc hoặc chất độc: Một số thuốc có thể gây tổn thương gan, cần theo dõi cẩn thận khi sử dụng.\n\n" +
      "Triệu chứng:\n\n" +
      "- Cơ năng: Mệt mỏi, chán ăn, đau hạ sườn phải, rối loạn tiêu hóa.\n" +
      "- Thực thể: Vàng da, vàng mắt, sưng bụng do cổ trướng (trong trường hợp nặng).\n" +
      "- Các triệu chứng khác: Xuất huyết dưới da, vàng da, giãn mao mạch.\n\n" +
      "Chẩn đoán:\n\n" +
      "- Cận lâm sàng: Các xét nghiệm máu để kiểm tra men gan (AST và ALT), bilirubin, và xét nghiệm virus để xác định loại viêm gan. Xét nghiệm HBsAg và anti-HCV để xác định virus viêm gan B và C.\n\n" +
      "Điều trị:\n\n" +
      "- Viêm gan virus A: Thường tự khỏi mà không cần điều trị đặc biệt. Quan trọng là điều trị hỗ trợ.\n" +
      "- Viêm gan virus B: Hơn 95% trường hợp sẽ hồi phục tự nhiên, nhưng nếu triệu chứng nặng có thể cần điều trị thuốc kháng virus.\n" +
      "- Viêm gan virus C: Điều trị bằng thuốc kháng virus để loại bỏ virus khỏi cơ thể và phòng ngừa các biến chứng nặng. Cần đạt được 'đáp ứng vi rút bền vững (SVR)' sau khi điều trị.\n\n" +
      "Lời khuyên:\n\n" +
      "Để bảo vệ sức khỏe gan, hãy thực hiện xét nghiệm định kỳ, tuân thủ chế độ ăn uống khoa học, tránh lạm dụng rượu và tuân thủ điều trị theo hướng dẫn của bác sĩ. Nếu bạn nghi ngờ bị viêm gan hoặc có triệu chứng liên quan, hãy tìm kiếm sự tư vấn của bác sĩ chuyên khoa để có phương pháp điều trị thích hợp.\n\n" +
      "Dạ, hy vọng thông tin này hữu ích cho bạn!",
    "gan nhiễm mỡ":
      "Dạ, gan nhiễm mỡ, còn gọi là bệnh gan mỡ không do rượu (NAFLD), là tình trạng tích tụ mỡ trong tế bào gan mà không phải do tiêu thụ rượu bia thái quá. Đây là một vấn đề sức khỏe phổ biến, có thể tiến triển thành các bệnh gan nghiêm trọng nếu không được phát hiện và điều trị kịp thời.\n\n" +
      "Nguyên nhân:\n\n" +
      "1. Thừa cân và béo phì: Cân nặng dư thừa là yếu tố nguy cơ hàng đầu cho gan nhiễm mỡ.\n" +
      "2. Rối loạn chuyển hóa: Bao gồm đái tháo đường type 2, rối loạn lipid máu (mỡ trong máu cao).\n" +
      "3. Chế độ ăn uống không hợp lý: Sử dụng nhiều thực phẩm béo, đường và chế phẩm tinh chế.\n" +
      "4. Thiếu năng động thể chất: Ít hoạt động thể chất có thể làm tăng nguy cơ gan nhiễm mỡ.\n" +
      "5. Một số thuốc: Như corticosteroids, có thể dẫn đến gan nhiễm mỡ.\n" +
      "6. Các tình trạng y tế khác: Như suy thận, nhiễm HIV, hoặc tâm lý.\n\n" +
      "Triệu chứng:\n\n" +
      "- Nhiều người không có triệu chứng trong giai đoạn đầu. Khi tiến triển, có thể gặp các triệu chứng như:\n" +
      "  - Mệt mỏi.\n" +
      "  - Đau hoặc khó chịu ở vùng gan (hạ sườn phải).\n" +
      "  - Tăng cholesterol và huyết áp cao.\n" +
      "  - Các dấu hiệu của tổn thương gan nếu bệnh tiến triển thành viêm gan mỡ hoặc xơ gan.\n\n" +
      "Chẩn đoán:\n\n" +
      "- Xét nghiệm máu: Kiểm tra men gan (ALT, AST), nồng độ lipid.\n" +
      "- Siêu âm bụng: Để phát hiện tình trạng mỡ trong gan.\n" +
      "- MRI hay CT scan: Nếu cần thiết để đánh giá độ nghiêm trọng.\n" +
      "- Sinh thiết gan: Đôi khi cần thiết để xác định mức độ tổn thương và viêm.\n\n" +
      "Điều trị:\n\n" +
      "1. Thay đổi lối sống:\n" +
      "   - Giảm cân: Nhắm đến việc giảm khoảng 5-10% trọng lượng cơ thể.\n" +
      "   - Chế độ ăn uống: Tăng cường trái cây, rau củ, và thực phẩm giàu chất xơ. Giảm thực phẩm giàu đường và chất béo bão hòa.\n" +
      "   - Tăng cường hoạt động thể chất: Thực hiện ít nhất 150 phút hoạt động aerobic mỗi tuần.\n\n" +
      "2. Theo dõi sức khỏe: Định kỳ kiểm tra sức khỏe gan và các chỉ số liên quan khác với sự giám sát của bác sĩ.\n\n" +
      "3. Điều trị thuốc: Hiện tại không có thuốc đặc hiệu cho bệnh gan nhiễm mỡ, nhưng bác sĩ có thể chỉ định thuốc để điều trị các rối loạn liên quan như tiểu đường hoặc cholesterol cao.\n\n" +
      "Phòng ngừa:\n\n" +
      "- Duy trì cân nặng khỏe mạnh.\n" +
      "- Ăn uống lành mạnh.\n" +
      "- Tập luyện thể dục thường xuyên.\n" +
      "- Tránh lạm dụng rượu và thuốc lá.\n\n" +
      "Dạ, nếu bạn có thêm câu hỏi nào hoặc cần tư vấn cụ thể hơn, hãy cho tôi biết!",
    "dấu hiệu nhận biết của bệnh hen suyễn":
      "Dạ, nếu bạn bị hen suyễn, có thể nhận biết qua các dấu hiệu như: khó thở, ho kéo dài, thở khò khè, và cảm giác bó ngực.\n\n",
    "hen xuyễn":
      "Dạ, hen xuyễn (hay còn gọi là hen phế quản) là một bệnh lý mãn tính của đường hô hấp, đặc trưng bởi sự viêm nhiễm và co thắt của các ống phế quản trong phổi, dẫn đến tình trạng khó thở, ho và thở khò khè. Đây là một trong những bệnh lý phổ biến nhất ảnh hưởng đến hệ hô hấp và có thể xảy ra ở mọi lứa tuổi, nhưng thường bắt đầu từ trẻ nhỏ.\n\n" +
      "Nguyên nhân:\n\n" +
      "Nguyên nhân gây bệnh hen xuyễn có thể được chia thành hai loại chính:\n\n" +
      "1. Yếu tố dị ứng:\n" +
      "   - Dị ứng với phấn hoa, bụi nhà, nấm mốc, lông thú vật.\n" +
      "   - Thức ăn như hải sản, đậu phộng, sữa.\n" +
      "2. Yếu tố không dị ứng:\n" +
      "   - Khói thuốc, ô nhiễm không khí.\n" +
      "   - Thời tiết lạnh hoặc ẩm ướt.\n" +
      "   - Các bệnh nhiễm trùng đường hô hấp.\n" +
      "   - Cảm xúc căng thẳng, lo âu.\n\n" +
      "Triệu chứng:\n\n" +
      "Các triệu chứng của hen xuyễn có thể khác nhau giữa các cá nhân, nhưng thường bao gồm:\n" +
      "- Khó thở, thường tái phát, nhất là vào ban đêm hoặc khi gắng sức.\n" +
      "- Ho, có thể bị ho vào ban đêm hoặc trong tình huống nhất định.\n" +
      "- Thở khò khè (tiếng rít khi thở ra).\n" +
      "- Nặng ngực.\n\n" +
      "Chẩn đoán:\n\n" +
      "Để chẩn đoán hen xuyễn, bác sĩ có thể thực hiện:\n\n" +
      "- Khám lâm sàng: Đánh giá triệu chứng và tiền sử bệnh.\n" +
      "- Xét nghiệm phổi: Sử dụng test hô hấp để đo lưu lượng khí và khả năng thở phổi.\n" +
      "- Xét nghiệm dị ứng: Xác định các dị nguyên có thể gây ra triệu chứng.\n\n" +
      "Điều trị:\n\n" +
      "1. Thuốc điều trị:\n" +
      "   - Thuốc giãn phế quản: Như salbutamol, thường được sử dụng trong các trường hợp cấp tính.\n" +
      "   - Thuốc chống viêm: Corticosteroid đường hít để kiểm soát viêm.\n\n" +
      "2. Kiểm soát môi trường:\n" +
      "   - Tránh xa các tác nhân gây dị ứng và kích thích.\n" +
      "   - Giữ không gian sinh hoạt sạch sẽ để giảm mức độ chất gây dị ứng.\n\n" +
      "3. Quản lý triệu chứng:\n" +
      "   - Sử dụng thiết bị hô hấp (như bình xịt khí dung) theo hướng dẫn của bác sĩ.\n" +
      "   - Phác đồ điều trị cá nhân hóa phù hợp với tình trạng cụ thể của bệnh nhân.\n\n" +
      "Phòng ngừa:\n\n" +
      "- Tránh tiếp xúc với các tác nhân dị ứng đã biết.\n" +
      "- Thực hiện kiểm tra sức khỏe định kỳ.\n" +
      "- Tập thể dục thường xuyên, nhưng nên kiểm tra tình trạng hô hấp trước khi bắt đầu.\n\n" +
      "Dạ, nếu bạn có thêm câu hỏi nào hoặc cần thông tin cụ thể hơn về hen xuyễn, hãy cho tôi biết!",
    "dấu hiệu nhận biết của bệnh suy thận":
      "Dạ, nếu bạn bị suy thận, một số dấu hiệu thường gặp là: tiểu ít, phù nề tay chân, mệt mỏi, buồn nôn, và khó thở.\n\n",
    "suy thận":
      "Dạ, suy thận là một tình trạng bệnh lý xảy ra khi thận không còn khả năng thực hiện các chức năng quan trọng của mình, như loại bỏ chất thải và nước dư thừa khỏi cơ thể, điều hòa điện giải và duy trì huyết áp ổn định. Suy thận có thể xảy ra đột ngột (suy thận cấp tính) hoặc phát triển từ từ (suy thận mạn tính).\n\n" +
      "Nguyên nhân:\n\n" +
      "1. Suy thận cấp tính:\n" +
      "   - Thiếu máu: Gây tổn thương đến thận do thiếu máu nuôi dưỡng.\n" +
      "   - Nhiễm trùng: Như nhiễm trùng huyết có thể gây tổn thương thận.\n" +
      "   - Tắc nghẽn: Do sỏi thận, u hoặc khối u gây tắc nghẽn đường niệu.\n" +
      "   - Sử dụng một số thuốc: Như NSAIDs, kháng sinh aminoglycosides, thuốc lợi tiểu.\n\n" +
      "2. Suy thận mạn tính:\n" +
      "   - Bệnh tiểu đường: Là một trong những nguyên nhân chính gây suy thận mạn.\n" +
      "   - Tăng huyết áp: Có thể gây tổn thương mạch máu ở thận.\n" +
      "   - Bệnh thận mạn tính: Như viêm cầu thận hoặc bệnh thận đa nang.\n" +
      "   - Suy thận do tuổi tác: Khi chức năng thận suy giảm dần theo thời gian.\n\n" +
      "Triệu chứng:\n\n" +
      "Suy thận cấp tính:\n" +
      "- Giảm lượng nước tiểu (oliguria).\n" +
      "- Sưng phù chân, tay, mặt do giữ nước.\n" +
      "- Khó thở, nhức đầu, buồn nôn và nôn.\n" +
      "- Tăng huyết áp, nhịp tim nhanh.\n\n" +
      "Suy thận mạn tính:\n" +
      "- Mệt mỏi, cảm giác yếu ớt.\n" +
      "- Khó ngủ, ngứa ngáy, chuột rút cơ bắp.\n" +
      "- Thay đổi trong thói quen đi tiểu (tăng/giảm lượng nước tiểu).\n" +
      "- Nôn mửa, mất cảm giác ngon miệng và giảm cân.\n\n" +
      "Chẩn đoán:\n\n" +
      "- Xét nghiệm máu: Đo nồng độ creatinin, ure máu và điện giải.\n" +
      "- Xét nghiệm nước tiểu: Phân tích thành phần và chức năng thận.\n" +
      "- Hình ảnh học: Siêu âm thận để xác định bất thường về hình dạng và cấu trúc.\n" +
      "- Sinh thiết thận: Nếu cần thiết để xác định nguyên nhân suy thận.\n\n" +
      "Điều trị:\n\n" +
      "Suy thận cấp tính:\n" +
      "- Điều chỉnh nước và điện giải.\n" +
      "- Điều trị triệu chứng và nguyên nhân gốc.\n" +
      "- Có thể cần lọc máu tạm thời.\n\n" +
      "Suy thận mạn tính:\n" +
      "- Kiểm soát bệnh nền (tiểu đường, tăng huyết áp).\n" +
      "- Thay đổi lối sống: Chế độ ăn uống cân bằng, hạn chế muối, kali, phốt phát.\n" +
      "- Thực hiện lọc máu hoặc ghép thận nếu suy thận tiến triển nặng.\n\n" +
      "Phòng ngừa:\n\n" +
      "- Quản lý tốt bệnh tiểu đường và huyết áp.\n" +
      "- Kiểm tra chức năng thận định kỳ, đặc biệt ở những người có nguy cơ cao.\n" +
      "- Duy trì lối sống lành mạnh: chế độ ăn uống hợp lý và tập thể dục thường xuyên.\n\n" +
      "Dạ, nếu bạn có thêm câu hỏi nào hoặc muốn tìm hiểu sâu hơn về suy thận, hãy cho tôi biết!",
    "dấu hiệu nhận biết của bệnh loãng xương":
      "Dạ, nếu bạn bị loãng xương, có thể nhận biết qua các triệu chứng như: đau xương, đau lưng, gãy xương dễ dàng, và giảm chiều cao.\n\n",
    "Thông tin về loãng xương":
      "Dạ, loãng xương (osteoporosis) là một bệnh lý xương mạn tính, đặc trưng bởi sự giảm mật độ khoáng xương, làm tăng nguy cơ gãy xương. Bệnh thường phổ biến hơn ở phụ nữ sau mãn kinh và người cao tuổi, nhưng cũng có thể xảy ra ở đàn ông và các nhóm tuổi trẻ hơn trong một số trường hợp nhất định.\n\n" +
      "Nguyên nhân:\n\n" +
      "- Yếu tố nội tiết: Mất cân bằng hormone, đặc biệt là estrogen ở phụ nữ sau mãn kinh, và testosterone ở nam giới.\n" +
      "- Thiếu hụt dinh dưỡng: Thiếu vitamin D và canxi, hai yếu tố quan trọng cho sức khỏe xương.\n" +
      "- Thói quen sống: Lối sống ít vận động, hút thuốc lá, và uống rượu bia quá mức.\n" +
      "- Bệnh lý nền: Các bệnh lý như cường giáp, bệnh Crohn, hoặc các bệnh lý đường tiêu hóa có thể ảnh hưởng đến khả năng hấp thu dinh dưỡng và khoáng chất.\n" +
      "- Thuốc: Sử dụng một số loại thuốc như corticosteroid trong thời gian dài có thể làm giảm mật độ xương.\n\n" +
      "Triệu chứng:\n\n" +
      "Loãng xương thường không có triệu chứng rõ ràng cho đến khi có gãy xương. Các triệu chứng có thể bao gồm:\n" +
      "- Gãy xương dễ dàng hơn, thường xảy ra từ cú ngã nhẹ hoặc không có nguyên nhân.\n" +
      "- Giảm chiều cao.\n" +
      "- Đau lưng do gãy xương ở cột sống.\n" +
      "- Hình dáng cơ thể thay đổi, như lưng cong hay gù.\n\n" +
      "Chẩn đoán:\n\n" +
      "Chẩn đoán loãng xương thường được thực hiện thông qua:\n\n" +
      "- Xét nghiệm mật độ xương: Thường là kỹ thuật DEXA (Dual-Energy X-ray Absorptiometry), giúp đo mật độ khoáng xương.\n" +
      "- Xét nghiệm máu: Đánh giá các chỉ số như vitamin D, canxi và hormone tuyến giáp.\n\n" +
      "Điều trị:\n\n" +
      "- Điều chỉnh chế độ ăn uống: Bổ sung canxi và vitamin D qua thực phẩm hoặc bổ sung viên.\n" +
      "- Tập thể dục: Các hoạt động giúp tăng cường sức mạnh cơ bắp và cải thiện mật độ xương, như đi bộ, tập tạ, yoga.\n" +
      "- Thuốc: Sử dụng thuốc chống loãng xương như bisphosphonates, hormone estrogen, hoặc thuốc đồng vận hormon parathyroid (teriparatide).\n" +
      "- Thay đổi lối sống: Ngừng hút thuốc, hạn chế rượu, và tham gia các hoạt động thể chất thường xuyên.\n\n" +
      "Phòng ngừa:\n\n" +
      "- Chế độ ăn uống hợp lý: Đảm bảo cung cấp đủ canxi và vitamin D.\n" +
      "- Vận động thường xuyên: Tập thể dục ít nhất 30 phút mỗi ngày.\n" +
      "- Khám sức khỏe định kỳ: Đặc biệt là cho những người có nguy cơ cao.\n\n" +
      "Dạ, nếu bạn cần thêm thông tin chi tiết hơn về loãng xương hoặc bất kỳ câu hỏi nào khác, hãy cho tôi biết!",
    "dấu hiệu nhận biết của bệnh viêm phổi":
      "Dạ, nếu bạn bị viêm phổi, các dấu hiệu bao gồm: ho có đờm, sốt cao, khó thở, và đau ngực khi hít thở.\n\n",
    "viêm phổi":
      "Dạ, viêm phổi là một tình trạng nhiễm trùng ở nhu mô phổi, có thể gây ra bởi nhiều tác nhân khác nhau, chủ yếu là vi khuẩn, virus, và một số loại nấm. Viêm phổi có thể xảy ra ở bất kỳ ai, nhưng thường gặp ở trẻ nhỏ, người cao tuổi, và những người có hệ miễn dịch yếu.\n\n" +
      "Các loại viêm phổi:\n\n" +
      "1. Viêm phổi mắc phải tại cộng đồng: Xảy ra ở người không nhập viện. Các tác nhân thường gặp bao gồm Streptococcus pneumoniae (phế cầu khuẩn) và virus cúm.\n" +
      "2. Viêm phổi do bệnh viện: Xảy ra ở bệnh nhân đang điều trị trong bệnh viện, thường do những vi khuẩn kháng thuốc.\n" +
      "3. Viêm phổi do hít phải: Xảy ra khi có sự xâm nhập của thức ăn, nước bọt, hoặc các vật liệu lạ vào phổi.\n\n" +
      "Triệu chứng:\n\n" +
      "- Sốt cao (39 - 40 độ C).\n" +
      "- Đau ngực, thường rõ rệt hơn khi thở sâu hoặc ho.\n" +
      "- Ho mới xuất hiện, sau đó ho có đờm đặc có thể có màu vàng, xanh hoặc màu gỉ sắt.\n" +
      "- Khó thở, thở nhanh, tím môi và đầu chi trong trường hợp nặng.\n" +
      "- Mệt mỏi, có thể có chán ăn.\n\n" +
      "Chẩn đoán:\n\n" +
      "1. Lâm sàng: Các triệu chứng như ho, sốt, đau ngực, và khó thở có thể gợi ý đến viêm phổi. Khám phổi có thể thấy ran ẩm hoặc ran nổ.\n" +
      "2. Cận lâm sàng:\n" +
      "- Xét nghiệm máu: Tăng số lượng bạch cầu, tốc độ lắng máu tăng.\n" +
      "- X-quang phổi: Thấy hình ảnh đám mờ hoặc tổn thương ở một bên hoặc cả hai bên phổi.\n" +
      "- Cấy đờm: Để xác định nguyên nhân gây bệnh.\n\n" +
      "Điều trị:\n\n" +
      "- Kháng sinh: Tùy thuộc vào tác nhân gây bệnh (vi khuẩn, virus), bác sĩ sẽ lựa chọn kháng sinh phù hợp.\n" +
      "- Điều trị triệu chứng: Giảm đau, hạ sốt, hồi phục chức năng hô hấp.\n" +
      "- Hỗ trợ điều trị: Nghỉ ngơi, hút thuốc lá nếu có, giữ ấm và cung cấp dinh dưỡng hợp lý.\n\n" +
      "Phòng bệnh:\n\n" +
      "- Tiêm vaccine phòng cúm và phế cầu cho những người có nguy cơ.\n" +
      "- Giữ vệ sinh cá nhân, rửa tay thường xuyên.\n" +
      "- Tránh khói thuốc lá và môi trường ô nhiễm.\n\n" +
      "Dạ, nếu bạn cần thêm thông tin chi tiết hơn hoặc có câu hỏi cụ thể về viêm phổi, hãy cho tôi biết nhé!",
    "dấu hiệu nhận biết của bệnh ung thư phổi":
      "Dạ, nếu bạn bị ung thư phổi, có thể gặp các dấu hiệu như: ho kéo dài, khó thở, đau ngực, giảm cân, và ho ra máu.\n\n",
    "dấu hiệu nhận biết của bệnh trầm cảm":
      "Dạ, nếu bạn bị trầm cảm, có thể nhận biết qua: cảm giác buồn bã kéo dài, mất hứng thú với hoạt động thường ngày, mệt mỏi, và khó ngủ.\n\n",
    "dấu hiệu nhận biết của bệnh viêm loét dạ dày":
      "Dạ, nếu bạn bị viêm loét dạ dày, có thể có các dấu hiệu như: đau bụng, buồn nôn, khó tiêu, ợ nóng, và sụt cân.\n\n",
    "dấu hiệu nhận biết của bệnh viêm đại tràng":
      "Dạ, nếu bạn bị viêm đại tràng, có thể nhận biết qua các dấu hiệu: đau bụng dưới, tiêu chảy, phân có chất nhầy, và mất cảm giác thèm ăn.\n\n",
    "dấu hiệu nhận biết của bệnh viêm khớp":
      "Dạ, nếu bạn bị viêm khớp, các dấu hiệu có thể bao gồm: sưng khớp, đau nhức, cứng khớp vào buổi sáng, và giảm khả năng vận động.\n\n",
    "dấu hiệu nhận biết của bệnh thiếu máu":
      "Dạ, nếu bạn bị thiếu máu, có thể nhận biết qua các dấu hiệu: mệt mỏi, da xanh xao, nhức đầu, chóng mặt, và cảm giác lạnh tay chân.\n\n",
    "dấu hiệu nhận biết của bệnh bệnh tim mạch":
      "Dạ, nếu bạn bị bệnh tim mạch, các dấu hiệu bao gồm: đau ngực, khó thở, mệt mỏi, đánh trống ngực, và phù tay chân.\n\n",
    "dấu hiệu nhận biết của bệnh lo âu":
      "Dạ, nếu bạn bị lo âu, có thể gặp các dấu hiệu như: căng thẳng, bồn chồn, hồi hộp, và khó ngủ.\n\n",
    "viêm xoang":
      "Dạ, nếu bạn bị viêm xoang, các dấu hiệu bao gồm: nghẹt mũi, đau nhức vùng mặt, đau đầu, và chảy dịch mũi.\n\n",
    "dấu hiệu nhận biết của bệnh sỏi thận":
      "Dạ, nếu bạn bị sỏi thận, các dấu hiệu có thể là: đau quặn lưng hoặc bụng dưới, buồn nôn, tiểu đau, và tiểu ra máu.\n\n",
    "sỏi thận":
      "Dạ, sỏi thận là tình trạng bệnh lý phổ biến, xảy ra khi có sự hình thành các tinh thể rắn trong thận. Những tinh thể này có thể tạo thành sỏi có kích thước khác nhau và gây ra sự đau đớn và nhiều vấn đề sức khỏe khác. Dưới đây là các thông tin chi tiết về sỏi thận:\n\n" +
      "Nguyên nhân gây sỏi thận:\n\n" +
      "1. Nồng độ khoáng chất cao: Nếu cơ thể có nồng độ cao của các khoáng chất như canxi, oxalat, uric acid trong nước tiểu, chúng có thể kết tụ lại và tạo thành sỏi.\n" +
      "2. Thiếu nước: Không uống đủ nước gây cô đặc hóa nước tiểu, làm tăng nguy cơ hình thành sỏi.\n" +
      "3. Chế độ ăn uống: Một chế độ ăn giàu protein, muối và đường có thể làm gia tăng nguy cơ tạo sỏi.\n" +
      "4. Bệnh lý: Một số bệnh lý như đái tháo đường, bệnh gout hoặc các rối loạn chuyển hóa có thể cản trở khả năng kiểm soát khoáng chất của cơ thể, dẫn đến hình thành sỏi.\n" +
      "5. Di truyền: Gia đình có tiền sử sỏi thận có thể làm tăng nguy cơ mắc bệnh này.\n\n" +
      "Triệu chứng:\n\n" +
      "- Đau lưng hoặc đau bụng dưới: Đau có thể lan ra các vùng khác như đùi, bụng dưới và phản ánh cơn đau quặn thận.\n" +
      "- Tiểu đau, tiểu buốt: Cảm giác đau rát khi đi tiểu, có thể đi tiểu thường xuyên hơn.\n" +
      "- Chảy máu trong nước tiểu: Nước tiểu có thể có màu hồng, đỏ hoặc nâu do có máu.\n" +
      "- Nôn mửa: Cảm giác buồn nôn hoặc nôn do đau đớn.\n" +
      "- Sốt và ớn lạnh: Nếu có nhiễm trùng đi kèm.\n\n" +
      "Chẩn đoán:\n\n" +
      "1. Khám lâm sàng: Bác sĩ sẽ khám sức khỏe và hỏi về triệu chứng.\n" +
      "2. Cận lâm sàng:\n" +
      "   - Xét nghiệm nước tiểu: Để kiểm tra có tinh thể sỏi và các dấu hiệu nhiễm trùng.\n" +
      "   - Siêu âm: Để xác định sự hiện diện của sỏi thận và kích thước của chúng.\n" +
      "   - Chụp X-quang hoặc CT scan: Để có hình ảnh rõ ràng hơn về các sỏi thận và vị trí của chúng.\n\n" +
      "Điều trị:\n\n" +
      "1. Điều trị nội khoa:\n" +
      "   - Thay đổi chế độ ăn uống: Giảm muối, tăng cường nước, và có thể điều chỉnh protein theo ý kiến bác sĩ.\n" +
      "   - Uống đủ nước: Để giúp làm loãng nước tiểu và ngăn ngừa hình thành sỏi.\n" +
      "   - Thuốc giảm đau: Dùng để giảm cơn đau do sỏi gây ra.\n" +
      "2. Điều trị ngoại khoa:\n" +
      "   - Nội soi: Can thiệp để lấy sỏi mà không cần mở. Đây là phương pháp thường được áp dụng.\n" +
      "   - Phẫu thuật mở: Dành cho những trường hợp nặng hoặc khi phương pháp nội soi không hiệu quả.\n\n" +
      "Phòng ngừa:\n\n" +
      "1. Uống đủ nước: Cần uống từ 2-3 lít nước mỗi ngày để duy trì lượng nước tiểu thích hợp.\n" +
      "2. Theo dõi chế độ ăn: Cân nhắc giảm lượng thực phẩm chứa oxalat (như các loại hạt, sô cô la) nếu bạn có tiền sử sỏi thận.\n\n" +
      "Nếu bạn có bất kỳ câu hỏi nào khác hoặc cần thêm thông tin về sỏi thận, hãy cho tôi biết nhé!",
    "dấu hiệu nhận biết của bệnh suy giáp":
      "Dạ, nếu bạn bị suy giáp, có thể nhận biết qua: mệt mỏi, tăng cân, da khô, rụng tóc, và cảm thấy lạnh.\n\n",
    "dấu hiệu nhận biết của bệnh viêm amidan":
      "Dạ, nếu bạn bị viêm amidan, các dấu hiệu có thể bao gồm: đau họng, sốt, hạch cổ sưng to, và khó nuốt.\n\n",
    "dấu hiệu nhận biết của bệnh viêm tai giữa":
      "Dạ, nếu bạn bị viêm tai giữa, các dấu hiệu gồm: đau tai, sốt, giảm thính lực, và chảy mủ tai.\n\n",
    "viêm tai giữa":
      "Dạ, viêm tai giữa là một tình trạng viêm nhiễm xảy ra tại vùng tai giữa, không chỉ ảnh hưởng đến trẻ em mà còn có thể xảy ra ở người lớn. Đây là một trong những bệnh lý phổ biến ở tai và có thể gây ra đau đớn cũng như ảnh hưởng đến thính lực nếu không được điều trị kịp thời. Dưới đây là những thông tin chi tiết về viêm tai giữa:\n\n" +
      "Nguyên nhân:\n\n" +
      "1. Nhiễm trùng vi khuẩn hoặc virus: Đây là nguyên nhân chủ yếu gây viêm tai giữa. Các loại virus gây cảm cúm, sổ mũi có thể khiến dịch trong tai giữa bị tích tụ và gây viêm.\n" +
      "2. Bệnh lý về mũi họng: Viêm họng, viêm mũi dị ứng, hoặc các bệnh về xoang có thể làm tắc ngẽn ống Eustachian, dẫn đến viêm tai giữa.\n" +
      "3. Tình trạng dị ứng: Một số người bị dị ứng có thể dễ bị viêm tai giữa do tình trạng viêm niêm mạc.\n" +
      "4. Yếu tố môi trường: Khói thuốc lá và môi trường ô nhiễm có thể làm tăng nguy cơ mắc viêm tai giữa.\n\n" +
      "Triệu chứng:\n\n" +
      "1. Đau tai: Đây là triệu chứng chính mà bệnh nhân thường cảm nhận. Đau có thể dữ dội, đặc biệt là khi nằm.\n" +
      "2. Sốt: Trẻ em có thể bị sốt cao khi mắc viêm tai giữa.\n" +
      "3. Chảy dịch: Dịch có thể từ tai chảy ra, đôi khi có máu.\n" +
      "4. Khó nghe: Sự tích tụ dịch trong tai giữa có thể làm giảm thính lực.\n" +
      "5. Ngứa hoặc cảm giác đầy tai: Bệnh nhân có thể cảm thấy ngứa hoặc như có áp lực trong tai.\n\n" +
      "Chẩn đoán:\n\n" +
      "1. Khám lâm sàng: Bác sĩ sẽ sử dụng một ống soi tai để kiểm tra tình trạng của tai giữa và màng nhĩ.\n" +
      "2. Cận lâm sàng: Trong một số trường hợp, có thể cần thực hiện xét nghiệm nước mũi để xác định loại vi khuẩn hoặc virus gây bệnh.\n\n" +
      "Điều trị:\n\n" +
      "1. Nội khoa:\n" +
      "   - Thuốc giảm đau: Dùng cho việc kiểm soát cơn đau.\n" +
      "   - Kháng sinh: Nếu viêm tai giữa do vi khuẩn, bác sĩ sẽ chỉ định kháng sinh.\n" +
      "   - Thuốc chống viêm: Giúp giảm sưng và viêm ở vùng tai.\n" +
      "2. Theo dõi: Trong trường hợp viêm tai giữa không biến chứng, bác sĩ có thể đề nghị theo dõi trong vài ngày trước khi bắt đầu điều trị bằng kháng sinh, vì nhiều trường hợp sẽ hồi phục tự nhiên.\n" +
      "3. Phẫu thuật: Trong trường hợp viêm tai giữa mạn tính hoặc có biến chứng, can thiệp phẫu thuật có thể cần thiết. Phẫu thuật có thể bao gồm việc đặt ống thông tai để thông thoáng và thoát dịch.\n\n" +
      "Phòng ngừa:\n\n" +
      "1. Tăng cường sức đề kháng: Duy trì sức khỏe bằng chế độ ăn uống đầy đủ dinh dưỡng.\n" +
      "2. Vệ sinh cá nhân tốt: Rửa tay thường xuyên để ngăn ngừa nhiễm trùng.\n" +
      "3. Tránh tiếp xúc với khói thuốc lá: Giảm thiểu nguy cơ mắc bệnh cho trẻ em.\n\n" +
      "Viêm tai giữa nếu không được phát hiện và điều trị kịp thời có thể dẫn đến các biến chứng nghiêm trọng như tắc nghẽn đường nghe, mất thính lực tạm thời hoặc vĩnh viễn. Nếu bạn hoặc người thân có triệu chứng viêm tai giữa, hãy tìm kiếm sự chăm sóc y tế ngay lập tức. Nếu bạn cần thêm thông tin, hãy cho tôi biết!",
    "bệnh mất ngủ":
      "Dạ, nếu bạn bị mất ngủ, có thể nhận biết qua: khó ngủ, tỉnh giấc giữa đêm, không cảm thấy nghỉ ngơi đủ, và mệt mỏi vào ban ngày.\n\n",
    "suy nhược cơ thể":
      "Dạ, suy nhược cơ thể là một tình trạng bệnh lý mà cơ thể không còn đủ sức khỏe và năng lượng để hoạt động bình thường. Tình trạng này không chỉ liên quan đến thể chất mà còn có thể ảnh hưởng đến tâm lý, cảm xúc và khả năng làm việc hàng ngày của người bệnh. Dưới đây là các thông tin chi tiết về suy nhược cơ thể:\n\n" +
      "Nguyên nhân:\n\n" +
      "1. Thiếu dinh dưỡng: Không cung cấp đủ calo và các dưỡng chất cần thiết cho cơ thể có thể dẫn đến suy nhược.\n" +
      "2. Bệnh lý nền: Các bệnh lý mãn tính như bệnh tiểu đường, bệnh tim mạch, bệnh lý hô hấp hoặc bệnh lý thận có thể gây ra hiện tượng suy nhược.\n" +
      "3. Stress tâm lý: Căng thẳng, lo âu và trầm cảm là những yếu tố tâm lý có thể làm giảm năng lượng và sức khỏe tổng thể.\n" +
      "4. Sự suy giảm hormone: Sự thay đổi các hormone trong cơ thể, đặc biệt là trong thời gian mãn kinh, có thể góp phần vào tình trạng suy nhược.\n" +
      "5. Mất nước: Thiếu nước có thể gây ra tình trạng mệt mỏi và suy yếu.\n\n" +
      "Triệu chứng:\n\n" +
      "- Mệt mỏi kéo dài: Là triệu chứng phổ biến, cảm giác không thể hồi phục dù đã nghỉ ngơi.\n" +
      "- Giảm cân không rõ nguyên nhân: Điều này có thể xảy ra do mất tập trung vào việc ăn uống hoặc sự thèm ăn giảm.\n" +
      "- Chán ăn: Không cảm thấy muốn ăn cũng là một dấu hiệu của suy nhược.\n" +
      "- Khó khăn trong việc tập trung: Trạng thái tinh thần không minh mẫn, khó khăn trong việc ra quyết định hoặc tập trung vào công việc.\n" +
      "- Rối loạn giấc ngủ: Ngủ không sâu hoặc mất ngủ có thể diễn ra trong tình trạng này.\n" +
      "- Cảm giác yếu đuối: Cảm giác cơ thể không đủ sức lực để thực hiện các hoạt động hàng ngày.\n\n" +
      "Chẩn đoán:\n\n" +
      "- Khám lâm sàng: Bác sĩ sẽ hỏi về các triệu chứng, tiền sử bệnh và thói quen sinh hoạt của bạn.\n" +
      "- Xét nghiệm máu: Để kiểm tra các chỉ số như nồng độ hemoglobin, vitamin, hormone và các tình trạng bệnh lý khác.\n" +
      "- Đánh giá tâm lý: Có thể cần kiểm tra để đánh giá mức độ stress hoặc các vấn đề tâm lý khác.\n\n" +
      "Điều trị:\n\n" +
      "1. Thay đổi chế độ ăn uống:\n" +
      "   - Bổ sung dinh dưỡng đầy đủ: Đảm bảo chế độ ăn có đủ các nhóm thực phẩm cần thiết như protein, vitamin và khoáng chất.\n" +
      "   - Uống đủ nước: Đảm bảo cơ thể được cung cấp đủ nước hàng ngày.\n\n" +
      "2. Tập luyện thể chất:\n" +
      "   - Điều chỉnh lối sống bằng cách tập thể dục nhẹ nhàng sẽ giúp cải thiện sức khỏe tổng quát.\n" +
      "   - Hạn chế căng thẳng: Cử chỉ yoga hoặc thiền có thể giúp thư giãn tinh thần.\n\n" +
      "3. Điều trị bệnh lý nền:\n" +
      "   - Nếu có các vấn đề sức khỏe khác, bác sĩ có thể chỉ định điều trị phù hợp để cải thiện tình trạng suy nhược.\n\n" +
      "4. Tư vấn tâm lý:\n" +
      "   - Nếu suy nhược liên quan đến stress, lo âu hoặc trầm cảm, tư vấn tâm lý hoặc liệu pháp tâm lý có thể cần thiết.\n\n" +
      "Nếu bạn hoặc người thân gặp phải triệu chứng suy nhược, hãy tìm kiếm sự tư vấn y tế để được kiểm tra và điều trị kịp thời. Nếu bạn cần thêm thông tin hoặc có câu hỏi khác, hãy cho tôi biết!",
    "dấu hiệu nhận biết của bệnh suy nhược cơ thể":
      "Dạ, nếu bạn bị suy nhược cơ thể, các dấu hiệu bao gồm: mệt mỏi, giảm cân, không thèm ăn, và dễ bị ốm.\n\n",
    "dấu hiệu nhận biết của bệnh viêm nhiễm đường tiết niệu":
      "Dạ, nếu bạn bị viêm đường tiết niệu, có thể có các dấu hiệu như: đau khi tiểu, tiểu nhiều lần, tiểu ra máu, và đau bụng dưới.\n\n",
    "viêm đường tiết niệu":
      "Dạ, viêm đường tiết niệu (VDTNI) là một nhiễm trùng khá phổ biến, ảnh hưởng đến một phần hoặc toàn bộ đường tiết niệu, bao gồm thận, niệu quản, bàng quang và niệu đạo. Dưới đây là thông tin chi tiết về tình trạng này:\n\n" +
      "Nguyên nhân:\n\n" +
      "- Vi khuẩn: Nguyên nhân hàng đầu của VDTNI thường là do vi khuẩn, cụ thể là E. coli, chiếm gần 80-90% các ca nhiễm. Ngoài ra, các vi khuẩn khác như Klebsiella, Proteus và Enterobacter cũng có thể gây bệnh.\n" +
      "- Nấm: Trong một số trường hợp, nhiễm nấm, nhất là Candida, cũng có thể là nguyên nhân gây VDTNI.\n" +
      "- Virus và ký sinh trùng: Mặc dù ít phổ biến hơn, nhưng cũng có thể xảy ra.\n" +
      "- Yếu tố khác: Sự tắc nghẽn đường tiết niệu, sỏi thận, hoặc các dị tật bẩm sinh cũng có thể tăng nguy cơ nhiễm bệnh.\n\n" +
      "Triệu chứng:\n\n" +
      "- Tiểu đau, tiểu buốt: Cảm giác đau hoặc khó chịu khi tiểu tiện.\n" +
      "- Tiểu nhiều lần: Nhu cầu tiểu tiện thường xuyên nhưng chỉ tiểu ít mỗi lần.\n" +
      "- Nước tiểu có mùi hôi: Thường có sự thay đổi mùi do nhiễm trùng.\n" +
      "- Đau vùng bụng dưới hoặc lưng: Cảm giác đau hoặc khó chịu trong vùng bụng dưới và thắt lưng.\n" +
      "- Sốt: Có thể xuất hiện sốt hoặc những cơn ớn lạnh trong các trường hợp nghiêm trọng.\n" +
      "- Mệt mỏi cơ thể: Cảm thấy mệt mỏi và không thoải mái.\n\n" +
      "Chẩn đoán:\n\n" +
      "- Khám lâm sàng: Bác sĩ sẽ thu thập thông tin về triệu chứng và tiền sử bệnh.\n" +
      "- Xét nghiệm nước tiểu: Xét nghiệm nước tiểu sẽ giúp phát hiện sự hiện diện của vi khuẩn, bạch cầu và hồng cầu.\n" +
      "- Nuôi cấy nước tiểu: Để xác định loại vi khuẩn gây bệnh và kiểm tra độ nhạy cảm với kháng sinh.\n" +
      "- Hình ảnh học: Siêu âm có thể được chỉ định để kiểm tra các vấn đề khác như sỏi hoặc u trong đường tiết niệu.\n\n" +
      "Điều trị:\n\n" +
      "- Kháng sinh: Điều trị chính cho VDTNI là dùng kháng sinh. Thời gian điều trị thường kéo dài từ 3 đến 7 ngày tùy vào mức độ nghiêm trọng.\n" +
      "- Điều trị triệu chứng: Sử dụng thuốc giảm đau và thuốc chống viêm để giảm đau và khó chịu.\n" +
      "- Uống nhiều nước: Tăng lượng nước uống để giúp đẩy lùi các vi khuẩn ra khỏi đường tiết niệu.\n\n" +
      "Phòng ngừa:\n\n" +
      "- Uống nhiều nước: Để đảm bảo nước tiểu không quá đặc và giúp đào thải vi khuẩn.\n" +
      "- Vệ sinh cá nhân: Vệ sinh sạch sẽ vùng sinh dục, đặc biệt là sau khi quan hệ tình dục.\n" +
      "- Tránh giữ tiểu lâu: Cố gắng đi tiểu thường xuyên và không để nước tiểu tích tụ lâu ngày.\n\n" +
      "Biến chứng:\n\n" +
      "- Viêm thận: Có thể dẫn đến suy thận nếu không được điều trị.\n" +
      "- Nhiễm trùng huyết: Một tình trạng nguy hiểm đến tính mạng.\n\n" +
      "Nếu bạn hoặc người thân có triệu chứng của viêm đường tiết niệu, hãy liên hệ với bác sĩ để được chẩn đoán và điều trị kịp thời. Nếu bạn cần thêm thông tin, hãy cho tôi biết!",
    "dấu hiệu nhận biết của bệnh viêm họng":
      "Dạ, nếu bạn bị viêm họng, các triệu chứng bao gồm: đau rát họng, khó nuốt, ho khan, và sốt nhẹ.\n\n",
    "dấu hiệu nhận biết của bệnh rối loạn tiêu hóa":
      "Dạ, nếu bạn bị rối loạn tiêu hóa, có thể gặp các dấu hiệu như: đầy hơi, khó tiêu, buồn nôn, và đau bụng.\n\n",
    "dấu hiệu nhận biết của bệnh viêm da":
      "Dạ, nếu bạn bị viêm da, có thể nhận biết qua: ngứa, mẩn đỏ, da khô, và phát ban.\n\n",
    "dấu hiệu nhận biết của bệnh đau dạ dày":
      "Dạ, nếu bạn bị đau dạ dày, có thể có các triệu chứng như: đau vùng thượng vị, buồn nôn, ợ hơi, và khó tiêu.\n\n",
    "dấu hiệu nhận biết của bệnh dị ứng":
      "Dạ, nếu bạn bị dị ứng, các dấu hiệu có thể bao gồm: hắt hơi, ngứa mắt, phát ban, và khó thở.\n\n",
    "dấu hiệu nhận biết của bệnh huyết áp thấp":
      "Dạ, nếu bạn bị huyết áp thấp, có thể nhận thấy qua các dấu hiệu: chóng mặt, mệt mỏi, đau đầu, và ngất xỉu.\n\n",
    "dấu hiệu nhận biết của bệnh đau cơ":
      "Dạ, nếu bạn bị đau cơ, các triệu chứng bao gồm: đau nhức cơ, mệt mỏi cơ, và giảm khả năng vận động.\n\n",
    "dấu hiệu nhận biết của bệnh viêm ruột":
      "Dạ, nếu bạn bị viêm ruột, có thể nhận biết qua các dấu hiệu: đau bụng dưới, tiêu chảy, buồn nôn, và sốt.\n\n",
    "dấu hiệu nhận biết của bệnh đau đầu":
      "Dạ, nếu bạn bị đau đầu, có thể gặp các dấu hiệu như: đau vùng trán, buồn nôn, nhạy cảm với ánh sáng, và khó tập trung.\n\n",
    "dấu hiệu nhận biết của bệnh sởi":
      "Dạ, nếu bạn bị sởi, các dấu hiệu thường gặp là: sốt cao, phát ban đỏ, ho, và chảy nước mũi.\n\n",
    "dấu hiệu nhận biết của bệnh quai bị":
      "Dạ, nếu bạn bị quai bị, các dấu hiệu bao gồm: sưng đau tuyến mang tai, sốt, đau đầu, và mệt mỏi.\n\n",
    "dấu hiệu nhận biết của bệnh thủy đậu":
      "Dạ, nếu bạn bị thủy đậu, các dấu hiệu có thể là: sốt, phát ban dạng mụn nước, ngứa, và mệt mỏi.\n\n",
    "dấu hiệu nhận biết của bệnh đau vai gáy":
      "Dạ, nếu bạn bị đau vai gáy, có thể nhận thấy qua các dấu hiệu: đau nhức vùng vai và cổ, khó cử động, và cảm giác cứng khớp.\n\n",
    "dấu hiệu nhận biết của bệnh béo phì":
      "Dạ, nếu bạn bị béo phì, có thể nhận biết qua các dấu hiệu như: cân nặng vượt chuẩn, khó vận động, đau khớp, và thở gấp.\n\n",
    "béo phì":
      "Dạ, béo phì là một tình trạng y tế mà trong đó cơ thể tích trữ quá nhiều mỡ, dẫn đến những hậu quả tiêu cực cho sức khỏe. Béo phì thường được đánh giá thông qua chỉ số khối cơ thể (BMI), với BMI từ 30 trở lên được coi là béo phì. Dưới đây là một số thông tin chi tiết về béo phì:\n\n" +
      "Nguyên nhân:\n\n" +
      "1. Di truyền: Một số người có thể bị béo phì do yếu tố di truyền, ảnh hưởng đến cách mà cơ thể xử lý mỡ.\n" +
      "2. Chế độ ăn uống không lành mạnh: Thói quen tiêu thụ nhiều thực phẩm giàu calo, đường, và chất béo bão hòa có thể góp phần dẫn đến béo phì.\n" +
      "3. Thiếu hoạt động thể chất: Lối sống ít vận động làm giảm khả năng tiêu thụ calo, từ đó dễ dẫn đến tăng cân.\n" +
      "4. Yếu tố tâm lý: Căng thẳng, trầm cảm, hoặc một số rối loạn tâm lý khác có thể thúc đẩy việc ăn uống không kiểm soát.\n" +
      "5. Bệnh lý nền: Một số bệnh như bệnh Cushing, hội chứng buồng trứng đa nang (PCOS), hay các rối loạn tuyến giáp có thể ảnh hưởng đến trọng lượng cơ thể.\n\n" +
      "Hậu quả:\n\n" +
      "1. Bệnh tim mạch: Béo phì làm tăng nguy cơ mắc các bệnh về tim mạch, đột quỵ, và tăng huyết áp.\n" +
      "2. Bệnh tiểu đường: Béo phì có thể dẫn đến kháng insulin và tiểu đường loại 2.\n" +
      "3. Bệnh khớp: Tăng trọng lượng cơ thể gây ra áp lực lên các khớp, dẫn đến viêm khớp và đau khớp.\n" +
      "4. Rối loạn giấc ngủ: Người béo phì có nguy cơ cao mắc hội chứng ngưng thở khi ngủ.\n" +
      "5. Vấn đề tâm lý: Béo phì có thể dẫn đến tự ti, trầm cảm và lo âu.\n\n" +
      "Chẩn đoán:\n\n" +
      "Chẩn đoán béo phì chủ yếu được thực hiện qua việc tính toán chỉ số BMI bằng công thức:\n" +
      "[ \text{BMI} = \frac{\text{Cân nặng (kg)}}{(\text{Chiều cao (m)})^2} ]\n" +
      "Ngoài chỉ số BMI, bác sĩ có thể xem xét các yếu tố khác như số đo vòng eo và các xét nghiệm máu để đánh giá tình trạng sức khỏe tổng thể.\n\n" +
      "Điều trị:\n\n" +
      "1. Thay đổi lối sống: Tăng cường hoạt động thể chất và điều chỉnh chế độ ăn uống lành mạnh là cần thiết.\n" +
      "2. Tư vấn dinh dưỡng: Tham khảo ý kiến chuyên gia dinh dưỡng để xây dựng một kế hoạch ăn uống hợp lý, giảm calo và cung cấp đầy đủ dưỡng chất.\n" +
      "3. Sử dụng thuốc: Trong một số trường hợp, bác sĩ có thể chỉ định thuốc hỗ trợ giảm cân.\n" +
      "4. Phẫu thuật: Ở những người béo phì nặng mà không thể giảm cân bằng phương pháp khác, phẫu thuật giảm cân (như phẫu thuật cắt dạ dày) có thể là một lựa chọn.\n\n" +
      "Phòng ngừa:\n\n" +
      "Duy trì chế độ ăn uống cân đối, tập luyện thể dục thường xuyên, kiểm soát căng thẳng và hình thành thói quen sinh hoạt lành mạnh có thể giúp phòng ngừa béo phì.\n\n" +
      "Nếu bạn có thêm câu hỏi nào khác về vấn đề này hoặc cần tư vấn cụ thể hơn, hãy cho tôi biết!",
    "phòng ngừa ung thư":
      "Ngăn ngừa bệnh ung thư là một quá trình bao gồm nhiều yếu tố khác nhau. Dưới đây là một số cách để giảm nguy cơ mắc phải bệnh ung thư:\n\n" +
      "1. Chế độ ăn uống lành mạnh:\n\n" +
      "- Ăn nhiều trái cây và rau xanh: Các thực phẩm này chứa nhiều vitamin, khoáng chất và chất xơ, có khả năng chống oxy hóa giúp phòng ngừa ung thư.\n" +
      "- Giảm tiêu thụ thực phẩm chế biến sẵn: Hạn chế các loại thực phẩm có nhiều đường, chất béo bão hòa và natri có thể làm tăng nguy cơ ung thư.\n" +
      "- Hạn chế thịt đỏ và thịt chế biến sẵn: Một số nghiên cứu cho thấy việc tiêu thụ nhiều thịt đỏ và thịt chế biến sẵn có liên quan đến ung thư ruột kết.\n\n" +
      "2. Tập thể dục thường xuyên:\n\n" +
      "- Tập thể dục ít nhất 150 phút mỗi tuần: Các hoạt động thể chất có thể giúp duy trì cân nặng khỏe mạnh, giảm nguy cơ mắc ung thư.\n\n" +
      "3. Kiểm soát trọng lượng cơ thể:\n\n" +
      "- Giữ cân nặng trong mức hợp lý: Béo phì và thừa cân có thể làm tăng nguy cơ ung thư, như ung thư vú, ung thư đại trực tràng và ung thư tử cung.\n\n" +
      "4. Hạn chế tiêu thụ rượu:\n\n" +
      "- Giới hạn uống rượu: Tiêu thụ rượu có thể làm tăng nguy cơ mắc nhiều loại ung thư, đặc biệt là ung thư vú và ung thư gan.\n\n" +
      "5. Tránh thuốc lá:\n\n" +
      "- Không hút thuốc và tránh thuốc lá thụ động: Hút thuốc lá là nguyên nhân chính gây ra nhiều loại ung thư, bao gồm ung thư phổi, ung thư miệng và ung thư thực quản.\n\n" +
      "6. Bảo vệ khỏi ánh nắng mặt trời:\n\n" +
      "- Sử dụng kem chống nắng: Bảo vệ da khỏi tia UV có thể giúp giảm nguy cơ ung thư da.\n" +
      "- Tránh tắm nắng và sử dụng giường tắm nắng: Hạn chế thời gian tiếp xúc với ánh nắng mạnh, đặc biệt vào giữa trưa.\n\n" +
      "7. Thực hiện các xét nghiệm tầm soát định kỳ:\n\n" +
      "- Tham gia các chương trình tầm soát ung thư: Khi phát hiện sớm những dấu hiệu bất thường, việc điều trị và quản lý bệnh có thể hiệu quả hơn.\n\n" +
      "8. Tiêm vắc xin:\n\n" +
      "- Tiêm vắc xin phòng ngừa một số loại ung thư: Ví dụ, vắc xin HPV có thể giúp ngăn ngừa ung thư cổ tử cung và vắc xin viêm gan B giúp ngăn ngừa ung thư gan.\n\n" +
      "9. Tránh các yếu tố nguy cơ môi trường:\n\n" +
      "- Giảm tiếp xúc với hóa chất độc hại: Hạn chế tiếp xúc với các hóa chất độc hại tại nơi làm việc và trong đời sống hàng ngày.\n\n" +
      "Việc kết hợp nhiều phương pháp phòng ngừa sẽ mang lại hiệu quả cao trong việc giảm nguy cơ mắc ung thư. Nếu bạn có bất kỳ câu hỏi nào khác hoặc cần thêm thông tin, hãy cho tôi biết!",
    "dấu hiệu nhận biết của bệnh mất trí nhớ":
      "Dạ, nếu bạn bị mất trí nhớ, các dấu hiệu bao gồm: khó nhớ sự kiện, hay quên tên, khó tập trung, và mất phương hướng.\n\n",
    "dấu hiệu nhận biết của bệnh chóng mặt":
      "Dạ, nếu bạn bị chóng mặt, các triệu chứng có thể là: mất thăng bằng, buồn nôn, cảm giác quay cuồng, và mờ mắt.\n\n",
    "dấu hiệu nhận biết của bệnh nhiễm trùng":
      "Dạ, nếu bạn bị nhiễm trùng, các dấu hiệu thường là: sốt, sưng đau, đỏ da, và mệt mỏi.\n\n",
    "lây viêm gan B":
      "Viêm gan B (VGVR B) là một bệnh lý do virus viêm gan B (HBV) gây ra, và nó có khả năng lây lan rất cao. Dưới đây là các thông tin cơ bản về con đường lây truyền và biện pháp phòng ngừa:\n\n" +
      "1. Con đường lây truyền:\n\n" +
      "- Quan hệ tình dục không an toàn: Virus có thể lây truyền qua tiếp xúc với dịch cơ thể của người nhiễm bệnh, đặc biệt là qua đường tình dục không an toàn.\n" +
      "- Truyền máu: Virus có thể lây qua việc truyền máu hoặc tiếp xúc với các chế phẩm máu bị nhiễm HBV.\n" +
      "- Từ mẹ sang con: Phụ nữ mang thai bị nhiễm virus có thể truyền virus cho con khi sinh.\n" +
      "- Dụng cụ nhiễm bệnh: Sử dụng chung các dụng cụ xuyên chích như kim tiêm, dụng cụ xăm mình bị nhiễm virus.\n\n" +
      "2. Biện pháp phòng ngừa:\n\n" +
      "- Tiêm vắc xin: Vắc xin viêm gan B là biện pháp hiệu quả nhất để ngăn ngừa lây nhiễm.\n" +
      "- Thực hiện an toàn tình dục: Sử dụng bao cao su và hạn chế quan hệ tình dục không an toàn.\n" +
      "- Tránh chia sẻ dụng cụ: Không sử dụng chung kim tiêm, dao cạo hoặc các dụng cụ có thể tiếp xúc với máu.\n" +
      "- Thực hiện xét nghiệm định kỳ: Đặc biệt là đối với những người có nguy cơ cao, để phát hiện sớm tình trạng nhiễm HBV và thực hiện điều trị nếu cần thiết.\n\n" +
      "Lưu ý: Viêm gan B là một vấn đề sức khỏe nghiêm trọng nhưng có thể phòng ngừa được thông qua các biện pháp trên. Nếu bạn có thêm câu hỏi hoặc cần thông tin chi tiết hơn, hãy cho tôi biết!",
    "dấu hiệu nhận biết của bệnh đau mắt đỏ":
      "Dạ, nếu bạn bị đau mắt đỏ, các dấu hiệu có thể là: mắt đỏ, ngứa, chảy nước mắt, sưng mi mắt, và cảm giác cộm trong mắt.\n\n",
    "đau mắt đỏ":
      "Dạ, đau mắt đỏ, hay còn gọi là bệnh viêm kết mạc, là tình trạng phổ biến khi màng kết mạc - lớp màng mỏng bảo vệ mắt - bị viêm nhiễm. Dưới đây là những dấu hiệu và triệu chứng thường gặp của đau mắt đỏ:\n\n" +
      "Dấu hiệu đau mắt đỏ:\n1.    Mắt đỏ   : Màu trắng của mắt sẽ trở nên đỏ do sự giãn nở của mạch máu ở kết mạc.\n2.    Ngứa và rát   : Cảm giác ngứa hay rát có thể xảy ra, làm cho người bệnh có xu hướng dụi mắt.\n3.    Chảy nước mắt   : Có thể bị chảy nước mắt nhiều hoặc ít, nhưng thường là tình trạng tăng tiết nước mắt.\n4.    Chảy dịch   : Có thể thấy dịch nhầy hoặc dịch mủ từ mắt, tùy thuộc vào nguyên nhân gây viêm.\n5.    Nhạy cảm với ánh sáng   : Một số người có thể cảm thấy khó chịu với ánh sáng, gọi là nhạy cảm ánh sáng.\n6.    Mùi hôi   : Có thể có mùi hôi từ dịch chảy ra từ mắt.\n7.    Sưng mí mắt   : Mi mắt có thể sưng húp, gây khó khăn trong việc mở mắt.\n8.    Rối loạn thị lực   : Trong trường hợp viêm nặng, có thể thấy mờ hoặc giảm thị lực tạm thời.\n\n" +
      "Nguyên nhân:\n-    Nhiễm trùng   : Viêm do virus (như virus cúm) hoặc vi khuẩn (như vi khuẩn tụ cầu vàng).\n-    Dị ứng   : Dị ứng với phấn hoa, bụi, lông thú cưng hoặc hóa chất có thể gây viêm kết mạc dị ứng.\n-    Kích thích   : Do tiếp xúc với các chất kích thích như khói thuốc, bụi bẩn, hoặc hóa chất.\n\n" +
      "Khi nào cần đi khám bác sĩ?\n- Triệu chứng kéo dài hơn 3 ngày.\n- Có dấu hiệu đau nhức mắt nặng, đặc biệt là khi nhìn vào ánh sáng.\n- Có vấn đề nghiêm trọng về thị lực.\n- Mí mắt sưng húp nhiều hoặc có mủ chảy ra.\n- Trước đó đã có chấn thương mắt.\n\n" +
      "Để điều trị đau mắt đỏ, bạn cần xác định nguyên nhân gây ra tình trạng này. Nếu do nhiễm khuẩn, có thể cần thuốc kháng sinh, trong khi trường hợp dị ứng có thể muốn dùng thuốc kháng histamin. Nếu bạn gặp dấu hiệu đau mắt đỏ, hãy đến bác sĩ để được tư vấn và điều trị kịp thời.",
    "dấu hiệu nhận biết của bệnh suy tim":
      "Dạ, nếu bạn bị suy tim, có thể gặp các triệu chứng như: khó thở khi nằm, mệt mỏi, sưng phù chân và mắt cá, và nhịp tim không đều.\n\n",
    "dấu hiệu nhận biết của bệnh đau nửa đầu":
      "Dạ, nếu bạn bị đau nửa đầu, các triệu chứng có thể là: đau đầu dữ dội một bên, nhạy cảm với ánh sáng và âm thanh, buồn nôn, và nhìn mờ.\n\n",
    "dấu hiệu nhận biết của bệnh thoái hóa khớp":
      "Dạ, nếu bạn bị thoái hóa khớp, các dấu hiệu bao gồm: đau khớp, cứng khớp vào buổi sáng, mất linh hoạt, và sưng khớp.\n\n",
    "dấu hiệu nhận biết của bệnh gút":
      "Dạ, nếu bạn bị gút, các dấu hiệu thường là: đau dữ dội ở khớp ngón chân cái, sưng và đỏ khớp, cảm giác nóng ở khớp, và đau khớp ban đêm.\n\n",
    "dấu hiệu nhận biết của bệnh u xơ tử cung":
      "Dạ, nếu bạn bị u xơ tử cung, các triệu chứng có thể bao gồm: kinh nguyệt ra nhiều, đau bụng dưới, đau lưng, và tiểu khó.\n\n",
    "dấu hiệu nhận biết của bệnh tiểu đêm":
      "Dạ, nếu bạn bị tiểu đêm, các triệu chứng bao gồm: tiểu nhiều lần vào ban đêm, cảm giác tiểu gấp, và gián đoạn giấc ngủ.\n\n",
    "dấu hiệu nhận biết của bệnh nhiễm trùng máu":
      "Dạ, nếu bạn bị nhiễm trùng máu, các dấu hiệu có thể là: sốt cao, nhịp tim nhanh, khó thở, và mệt mỏi.\n\n",
    "dấu hiệu nhận biết của bệnh xơ vữa động mạch":
      "Dạ, nếu bạn bị xơ vữa động mạch, có thể gặp các dấu hiệu như: đau ngực, khó thở, nhịp tim không đều, và chóng mặt.\n\n",
    "dấu hiệu nhận biết bệnh viêm phế quản mãn tính":
      "Dạ, bệnh viêm phế quản mãn tính là một tình trạng viêm nhiễm kéo dài ở phế quản, thường liên quan đến việc tiếp xúc lâu dài với các yếu tố kích thích như khói thuốc lá, ô nhiễm không khí, hay bụi bẩn. Dưới đây là một số dấu hiệu nhận biết bệnh viêm phế quản mãn tính:\n\n" +
      "1. Ho mãn tính: Một trong những triệu chứng chính của viêm phế quản mãn tính là ho kéo dài, thường xuyên và có thể kéo dài ít nhất ba tháng trong một năm, trong ba năm liên tiếp.\n\n" +
      "2. Đờm: Nhiều bệnh nhân có xu hướng có đờm, thường là đờm màu trắng hoặc màu vàng, có thể xuất hiện mỗi khi ho.\n\n" +
      "3. Khó thở: Cảm giác khó thở hoặc tắc nghẹn, đặc biệt là trong các hoạt động thể chất, có thể xuất hiện do phế quản bị hẹp và viêm.\n\n" +
      "4. Khò khè: Nhiều người mắc viêm phế quản mãn tính có thể cảm thấy tiếng thở khò khè, là âm thanh phát ra khi không khí đi qua các ống phế quản hẹp.\n\n" +
      "5. Cảm giác nặng nề ở ngực: Một số bệnh nhân có thể cảm nhận được áp lực hoặc cảm giác nặng nề ở vùng ngực.\n\n" +
      "6. Mệt mỏi: Cảm giác mệt mỏi và khó chịu cũng có thể là dấu hiệu của tình trạng viêm phế quản mãn tính.\n\n" +
      "7. Tăng cường triệu chứng khi có yếu tố kích thích: Các triệu chứng có thể nặng hơn khi tiếp xúc với khói thuốc, ô nhiễm, hoặc trong thời tiết lạnh và ẩm.\n\n" +
      "Nếu bạn hoặc người thân có những triệu chứng này, tốt nhất là nên tham khảo ý kiến của bác sĩ để có chẩn đoán chính xác và điều trị kịp thời.\n\n" +
      "Dạ, hy vọng thông tin này sẽ hữu ích cho bạn!",
    "Dấu hiệu nhận biết bệnh viêm phế quản mãn tính":
      "Dạ, bệnh viêm phế quản mãn tính là một tình trạng viêm nhiễm kéo dài ở phế quản, thường liên quan đến việc tiếp xúc lâu dài với các yếu tố kích thích như khói thuốc lá, ô nhiễm không khí, hay bụi bẩn. Dưới đây là một số dấu hiệu nhận biết bệnh viêm phế quản mãn tính:\n\n" +
      "1. Ho mãn tính: Một trong những triệu chứng chính của viêm phế quản mãn tính là ho kéo dài, thường xuyên và có thể kéo dài ít nhất ba tháng trong một năm, trong ba năm liên tiếp.\n\n" +
      "2. Đờm: Nhiều bệnh nhân có xu hướng có đờm, thường là đờm màu trắng hoặc màu vàng, có thể xuất hiện mỗi khi ho.\n\n" +
      "3. Khó thở: Cảm giác khó thở hoặc tắc nghẹn, đặc biệt là trong các hoạt động thể chất, có thể xuất hiện do phế quản bị hẹp và viêm.\n\n" +
      "4. Khò khè: Nhiều người mắc viêm phế quản mãn tính có thể cảm thấy tiếng thở khò khè, là âm thanh phát ra khi không khí đi qua các ống phế quản hẹp.\n\n" +
      "5. Cảm giác nặng nề ở ngực: Một số bệnh nhân có thể cảm nhận được áp lực hoặc cảm giác nặng nề ở vùng ngực.\n\n" +
      "6. Mệt mỏi: Cảm giác mệt mỏi và khó chịu cũng có thể là dấu hiệu của tình trạng viêm phế quản mãn tính.\n\n" +
      "7. Tăng cường triệu chứng khi có yếu tố kích thích: Các triệu chứng có thể nặng hơn khi tiếp xúc với khói thuốc, ô nhiễm, hoặc trong thời tiết lạnh và ẩm.\n\n" +
      "Nếu bạn hoặc người thân có những triệu chứng này, tốt nhất là nên tham khảo ý kiến của bác sĩ để có chẩn đoán chính xác và điều trị kịp thời.\n\n" +
      "Dạ, hy vọng thông tin này sẽ hữu ích cho bạn!",
    "dấu hiệu viêm loét dạ dày":
      "Dạ, viêm loét dạ dày là tình trạng viêm nhiễm và tổn thương xảy ra ở niêm mạc dạ dày, dẫn đến sự hình thành những ổ loét. Một số dấu hiệu và triệu chứng phổ biến của viêm loét dạ dày bao gồm:" +
      "1. Đau bụng vùng thượng vị: Cảm giác đau có thể xuất hiện trong các chu kỳ, thường đau khoảng 1-3 giờ sau khi ăn hoặc khi đói. Đau cũng có thể giảm đi khi ăn hoặc uống thuốc kháng acid." +
      "2. Buồn nôn và nôn: Nhiều bệnh nhân cảm thấy buồn nôn hoặc có thể nôn, đôi khi có thể kèm theo thức ăn cũ." +
      "3. Chán ăn: Mất cảm giác thèm ăn, thậm chí có thể dẫn đến giảm cân." +
      "4. Cảm giác nóng rát: Cảm giác nóng rát hoặc ợ chua tại vùng bụng." +
      "5. Ợ hơi, ợ chua: Cảm giác đầy bụng và ợ hơi sau khi ăn." +
      "6. Tình trạng xuất huyết tiêu hóa: Các triệu chứng như nôn ra máu hoặc có máu trong phân (phân đen hoặc đỏ) là dấu hiệu nghiêm trọng và cần được xử trí nhanh chóng." +
      "7. Cảm giác mệt mỏi: Mệt mỏi từ việc không ăn uống đầy đủ do đau dạ dày thường." +
      "8. Các biến chứng có thể xảy ra: Nếu không được điều trị, viêm loét dạ dày có thể dẫn đến các vấn đề như thủng dạ dày, xuất huyết dạ dày, hay hẹp môn vị gây ra các triệu chứng nghiêm trọng hơn." +
      "Nếu bạn có dấu hiệu nào trong số này, hãy tham khảo ý kiến bác sĩ để được kiểm tra và chẩn đoán chính xác. Điều trị kịp thời rất quan trọng để giảm thiểu nguy cơ biến chứng. Dạ, hy vọng thông tin này sẽ hữu ích cho bạn!",
    "viêm loét dạ dày":
      "Dạ, viêm loét dạ dày là tình trạng viêm nhiễm và tổn thương xảy ra ở niêm mạc dạ dày, dẫn đến sự hình thành những ổ loét. Một số dấu hiệu và triệu chứng phổ biến của viêm loét dạ dày bao gồm:" +
      "1. Đau bụng vùng thượng vị: Cảm giác đau có thể xuất hiện trong các chu kỳ, thường đau khoảng 1-3 giờ sau khi ăn hoặc khi đói. Đau cũng có thể giảm đi khi ăn hoặc uống thuốc kháng acid." +
      "2. Buồn nôn và nôn: Nhiều bệnh nhân cảm thấy buồn nôn hoặc có thể nôn, đôi khi có thể kèm theo thức ăn cũ." +
      "3. Chán ăn: Mất cảm giác thèm ăn, thậm chí có thể dẫn đến giảm cân." +
      "4. Cảm giác nóng rát: Cảm giác nóng rát hoặc ợ chua tại vùng bụng." +
      "5. Ợ hơi, ợ chua: Cảm giác đầy bụng và ợ hơi sau khi ăn." +
      "6. Tình trạng xuất huyết tiêu hóa: Các triệu chứng như nôn ra máu hoặc có máu trong phân (phân đen hoặc đỏ) là dấu hiệu nghiêm trọng và cần được xử trí nhanh chóng." +
      "7. Cảm giác mệt mỏi: Mệt mỏi từ việc không ăn uống đầy đủ do đau dạ dày thường." +
      "8. Các biến chứng có thể xảy ra: Nếu không được điều trị, viêm loét dạ dày có thể dẫn đến các vấn đề như thủng dạ dày, xuất huyết dạ dày, hay hẹp môn vị gây ra các triệu chứng nghiêm trọng hơn." +
      "Nếu bạn có dấu hiệu nào trong số này, hãy tham khảo ý kiến bác sĩ để được kiểm tra và chẩn đoán chính xác. Điều trị kịp thời rất quan trọng để giảm thiểu nguy cơ biến chứng. Dạ, hy vọng thông tin này sẽ hữu ích cho bạn!",
    "Dấu hiệu nhận biết của bệnh viêm loét dạ dày":
      "Dạ, để giảm viêm loét dạ dày, bạn có thể thực hiện các biện pháp sau đây:\n\n" +
      "1. Thay đổi chế độ ăn uống:\n" +
      "   - Hạn chế thực phẩm kích thích: Tránh thức ăn cay, mặn, chua, đồ uống có caffeine, rượu, và thuốc lá, vì chúng có thể làm tăng tình trạng viêm loét.\n" +
      "   - Ăn thức ăn dễ tiêu: Lựa chọn các thức ăn nhẹ, không làm kích thích dạ dày như cơm, cháo, súp, và các loại rau xanh nấu chín.\n" +
      "   - Không ăn quá no hoặc để dạ dày rỗng: Nên chia thành nhiều bữa nhỏ trong ngày để dạ dày không bị quá tải.\n\n" +
      "2. Sử dụng thuốc theo hướng dẫn của bác sĩ:\n" +
      "   - Thuốc ức chế bơm proton (PPI): Những loại thuốc này giúp giảm sản xuất acid dạ dày, giúp làm giảm đau và thúc đẩy quá trình lành vết loét.\n" +
      "   - Antacids: Các loại thuốc trung hòa acid có thể giúp giảm cơn đau tức thời.\n" +
      "   - Kháng sinh: Nếu có sự hiện diện của Helicobacter pylori, bác sĩ có thể kê đơn kháng sinh để tiêu diệt vi khuẩn gây loét.\n\n" +
      "3. Giảm stress:\n" +
      "   - Tìm các phương pháp giảm stress như thiền, yoga, hoặc tập thể dục nhẹ nhàng, vì stress có thể làm tình trạng loét trở nên nghiêm trọng hơn.\n\n" +
      "4. Thực hiện việc theo dõi và tái khám định kỳ:\n" +
      "   - Điều quan trọng là bạn nên theo dõi tình trạng sức khỏe của mình và đi khám bác sĩ định kỳ để điều chỉnh phương pháp điều trị nếu cần.\n\n" +
      "5. Thực hiện các biện pháp bảo vệ niêm mạc dạ dày:\n" +
      "   - Cân nhắc việc sử dụng chất bổ sung như probiotics hoặc các sản phẩm hỗ trợ tiêu hóa nói chung, nếu bác sĩ khuyên bạn nên sử dụng.\n\n" +
      "Nếu tình trạng viêm loét không được cải thiện hoặc có triệu chứng nghiêm trọng như đau dữ dội, nôn ra máu hay phân đen, bạn cần liên hệ ngay với bác sĩ để được xử trí kịp thời.\n\n" +
      "Dạ, hy vọng thông tin này sẽ hữu ích cho bạn!",
    "giảm viêm loét dạ dày":
      "Dạ, để giảm viêm loét dạ dày, bạn có thể thực hiện các biện pháp sau đây:\n\n" +
      "1. Thay đổi chế độ ăn uống:\n" +
      "   - Hạn chế thực phẩm kích thích: Tránh thức ăn cay, mặn, chua, đồ uống có caffeine, rượu, và thuốc lá, vì chúng có thể làm tăng tình trạng viêm loét.\n" +
      "   - Ăn thức ăn dễ tiêu: Lựa chọn các thức ăn nhẹ, không làm kích thích dạ dày như cơm, cháo, súp, và các loại rau xanh nấu chín.\n" +
      "   - Không ăn quá no hoặc để dạ dày rỗng: Nên chia thành nhiều bữa nhỏ trong ngày để dạ dày không bị quá tải.\n\n" +
      "2. Sử dụng thuốc theo hướng dẫn của bác sĩ:\n" +
      "   - Thuốc ức chế bơm proton (PPI): Những loại thuốc này giúp giảm sản xuất acid dạ dày, giúp làm giảm đau và thúc đẩy quá trình lành vết loét.\n" +
      "   - Antacids: Các loại thuốc trung hòa acid có thể giúp giảm cơn đau tức thời.\n" +
      "   - Kháng sinh: Nếu có sự hiện diện của Helicobacter pylori, bác sĩ có thể kê đơn kháng sinh để tiêu diệt vi khuẩn gây loét.\n\n" +
      "3. Giảm stress:\n" +
      "   - Tìm các phương pháp giảm stress như thiền, yoga, hoặc tập thể dục nhẹ nhàng, vì stress có thể làm tình trạng loét trở nên nghiêm trọng hơn.\n\n" +
      "4. Thực hiện việc theo dõi và tái khám định kỳ:\n" +
      "   - Điều quan trọng là bạn nên theo dõi tình trạng sức khỏe của mình và đi khám bác sĩ định kỳ để điều chỉnh phương pháp điều trị nếu cần.\n\n" +
      "5. Thực hiện các biện pháp bảo vệ niêm mạc dạ dày:\n" +
      "   - Cân nhắc việc sử dụng chất bổ sung như probiotics hoặc các sản phẩm hỗ trợ tiêu hóa nói chung, nếu bác sĩ khuyên bạn nên sử dụng.\n\n" +
      "Nếu tình trạng viêm loét không được cải thiện hoặc có triệu chứng nghiêm trọng như đau dữ dội, nôn ra máu hay phân đen, bạn cần liên hệ ngay với bác sĩ để được xử trí kịp thời.\n\n" +
      "Dạ, hy vọng thông tin này sẽ hữu ích cho bạn!",
    "Dấu hiệu nhận biết và cách kiểm soát bệnh tiểu đường":
      "Dạ, để giảm tiểu đường và kiểm soát mức đường huyết, bạn có thể thực hiện một số biện pháp sau đây:\n\n" +
      "1. Chế độ ăn uống lành mạnh:\n" +
      "   - Hạn chế đường và tinh bột: Giảm tiêu thụ đường và các loại thực phẩm chứa tinh bột tinh chế như bánh mì trắng, gạo trắng, và đồ ngọt.\n" +
      "   - Tăng cường thực phẩm giàu chất xơ: Ăn nhiều rau xanh, quả tươi và ngũ cốc nguyên hạt, vì chúng có thể giúp làm chậm quá trình tiêu hóa và hấp thụ đường.\n" +
      "   - Đảm bảo chế độ ăn cân bằng: Bao gồm protein, chất béo lành mạnh và carbohydrate để duy trì mức năng lượng ổn định.\n\n" +
      "2. Hoạt động thể chất:\n" +
      "   - Tập thể dục thường xuyên, ít nhất 150 phút mỗi tuần. Các hoạt động như đi bộ, bơi lội, hoặc tập thể dục nhịp điệu rất hữu ích trong việc kiểm soát đường huyết.\n\n" +
      "3. Theo dõi cân nặng:\n" +
      "   - Giảm cân có thể giúp cải thiện độ nhạy insulin. Ngay cả một sự giảm cân nhẹ từ 5-10% trọng lượng cơ thể cũng có thể làm giảm nguy cơ phát triển bệnh tiểu đường.\n\n" +
      "4. Kiểm soát căng thẳng:\n" +
      "   - Căng thẳng có thể làm tăng lượng đường trong máu. Thực hành các kỹ thuật giảm căng thẳng như thiền, yoga, hoặc các bài tập hô hấp có thể hữu ích.\n\n" +
      "5. Sử dụng thuốc theo chỉ định của bác sĩ:\n" +
      "   - Nếu bạn đã được chẩn đoán có bệnh tiểu đường, việc sử dụng thuốc hoặc insulin theo hướng dẫn của bác sĩ là rất quan trọng để kiểm soát mức đường huyết.\n\n" +
      "6. Kiểm tra thường xuyên:\n" +
      "   - Theo dõi thường xuyên mức đường huyết của bạn để biết rõ tình hình sức khỏe và điều chỉnh chế độ ăn uống cũng như lối sống nếu cần thiết.\n\n" +
      "7. Thực hiện thăm khám định kỳ:\n" +
      "   - Đến bác sĩ thường xuyên để kiểm tra và điều chỉnh phương pháp điều trị nếu cần thiết.\n\n" +
      "Nếu bạn có những triệu chứng hoặc lo ngại về tình trạng sức khỏe của mình, tốt nhất hãy thảo luận với bác sĩ để nhận được sự tư vấn và hỗ trợ kịp thời.\n\n" +
      "Dạ, hy vọng thông tin này sẽ hữu ích cho bạn!",
    "dấu hiệu nhận biết và cách kiểm soát bệnh tiểu đường":
      "Dạ, để giảm tiểu đường và kiểm soát mức đường huyết, bạn có thể thực hiện một số biện pháp sau đây:\n\n" +
      "1. Chế độ ăn uống lành mạnh:\n" +
      "   - Hạn chế đường và tinh bột: Giảm tiêu thụ đường và các loại thực phẩm chứa tinh bột tinh chế như bánh mì trắng, gạo trắng, và đồ ngọt.\n" +
      "   - Tăng cường thực phẩm giàu chất xơ: Ăn nhiều rau xanh, quả tươi và ngũ cốc nguyên hạt, vì chúng có thể giúp làm chậm quá trình tiêu hóa và hấp thụ đường.\n" +
      "   - Đảm bảo chế độ ăn cân bằng: Bao gồm protein, chất béo lành mạnh và carbohydrate để duy trì mức năng lượng ổn định.\n\n" +
      "2. Hoạt động thể chất:\n" +
      "   - Tập thể dục thường xuyên, ít nhất 150 phút mỗi tuần. Các hoạt động như đi bộ, bơi lội, hoặc tập thể dục nhịp điệu rất hữu ích trong việc kiểm soát đường huyết.\n\n" +
      "3. Theo dõi cân nặng:\n" +
      "   - Giảm cân có thể giúp cải thiện độ nhạy insulin. Ngay cả một sự giảm cân nhẹ từ 5-10% trọng lượng cơ thể cũng có thể làm giảm nguy cơ phát triển bệnh tiểu đường.\n\n" +
      "4. Kiểm soát căng thẳng:\n" +
      "   - Căng thẳng có thể làm tăng lượng đường trong máu. Thực hành các kỹ thuật giảm căng thẳng như thiền, yoga, hoặc các bài tập hô hấp có thể hữu ích.\n\n" +
      "5. Sử dụng thuốc theo chỉ định của bác sĩ:\n" +
      "   - Nếu bạn đã được chẩn đoán có bệnh tiểu đường, việc sử dụng thuốc hoặc insulin theo hướng dẫn của bác sĩ là rất quan trọng để kiểm soát mức đường huyết.\n\n" +
      "6. Kiểm tra thường xuyên:\n" +
      "   - Theo dõi thường xuyên mức đường huyết của bạn để biết rõ tình hình sức khỏe và điều chỉnh chế độ ăn uống cũng như lối sống nếu cần thiết.\n\n" +
      "7. Thực hiện thăm khám định kỳ:\n" +
      "   - Đến bác sĩ thường xuyên để kiểm tra và điều chỉnh phương pháp điều trị nếu cần thiết.\n\n" +
      "Nếu bạn có những triệu chứng hoặc lo ngại về tình trạng sức khỏe của mình, tốt nhất hãy thảo luận với bác sĩ để nhận được sự tư vấn và hỗ trợ kịp thời.\n\n" +
      "Dạ, hy vọng thông tin này sẽ hữu ích cho bạn!",
    zona:
      "Dạ, bệnh zona, hay còn gọi là bệnh zona thần kinh (herpes zoster), là một bệnh truyền nhiễm do virus varicella-zoster gây ra, cùng loại với virus gây bệnh thủy đậu. Dưới đây là một số thông tin quan trọng về bệnh zona:\n\n" +
      "Nguyên nhân:\n\n" +
      "Bệnh zona xảy ra khi virus varicella-zoster, sau khi gây ra bệnh thủy đậu ở một người, nằm trong trạng thái tiềm ẩn trong các tế bào thần kinh. Khi hệ miễn dịch yếu đi, virus này có thể tái hoạt động và gây ra bệnh zona.\n\n" +
      "Triệu chứng:\n\n" +
      "1. Đau và cảm giác ngứa: Triệu chứng đầu tiên thường là cảm giác đau hoặc ngứa râm ran ở vùng da trước khi phát ban xuất hiện.\n\n" +
      "2. Phát ban: Sau một vài ngày, phát ban đỏ sẽ xuất hiện, thường ở một bên cơ thể hoặc mặt. Phát ban này có thể chuyển thành mụn nước chứa dịch.\n\n" +
      "3. Mụn nước: Các mụn nước này thường có thể bể ra và tạo thành vết loét, sau đó sẽ đóng mài.\n\n" +
      "4. Triệu chứng toàn thân: Một số người có thể trải qua triệu chứng như sốt, mệt mỏi và đau đầu.\n\n" +
      "Phương pháp điều trị:\n\n" +
      "Không giống như bệnh thủy đậu, bệnh zona có thể được điều trị để giảm triệu chứng và thời gian bệnh. Điều trị có thể bao gồm:\n\n" +
      "- Kháng virus: Thuốc như acyclovir, valacyclovir hoặc famciclovir có thể giúp đẩy nhanh quá trình hồi phục, nhất là khi bắt đầu điều trị sớm.\n\n" +
      "- Giảm đau: Các loại thuốc giảm đau, thuốc chống viêm không steroid (NSAIDs) và có thể có phương pháp điều trị đau thần kinh.\n\n" +
      "- Chăm sóc da: Giữ cho vùng da sạch sẽ và khô ráo, tránh cào xước để ngăn ngừa nhiễm trùng thứ cấp.\n\n" +
      "Biến chứng:\n\n" +
      "- Đau thần kinh sau zona: Nhiều bệnh nhân có thể gặp phải đau kéo dài sau khi phục hồi khỏi bệnh, gọi là đau thần kinh sau zona.\n\n" +
      "- Nhiễm trùng: Có thể xảy ra nếu da bị tổn thương.\n\n" +
      "Phòng ngừa:\n\n" +
      "- Vaccine: Hiện tại có vaccine phòng ngừa zona, được khuyến nghị cho những người từ 50 tuổi trở lên để giảm nguy cơ mắc bệnh và biến chứng.\n\n" +
      "Nếu bạn có triệu chứng hoặc nghi ngờ mắc bệnh zona, hãy tham khảo ý kiến bác sĩ hoặc chuyên gia y tế để được tư vấn và điều trị kịp thời.\n\n" +
      "Dạ, hy vọng thông tin này sẽ hữu ích cho bạn!",
    "viêm da":
      "Dạ, viêm da là tình trạng viêm nhiễm ở da, có thể do nhiều nguyên nhân khác nhau, bao gồm dị ứng, nhiễm trùng, hoặc tiếp xúc với các chất kích thích. Dưới đây là một số thông tin chi tiết về viêm da:\n\n" +
      "Các loại viêm da phổ biến:\n\n" +
      "1. Viêm da tiếp xúc: Xảy ra khi da tiếp xúc với chất gây kích ứng hoặc dị ứng. Triệu chứng bao gồm đỏ, ngứa, và có thể xảy ra mụn nước.\n\n" +
      "2. Viêm da cơ địa (Eczema): Là một tình trạng mãn tính, thường xuất hiện với triệu chứng khô, ngứa và viêm da. Thường gặp ở trẻ em nhưng cũng có thể xảy ra ở người lớn.\n\n" +
      "3. Viêm da tiết bã (Seborrheic dermatitis): Thường xuất hiện trên vùng da có nhiều tuyến bã nhờn, như da đầu. Triệu chứng bao gồm vảy gàu, đỏ và ngứa.\n\n" +
      "4. Viêm da nấm: Do nấm gây ra, thường gây ngứa, đỏ, và có thể xuất hiện vảy.\n\n" +
      "Triệu chứng:\n\n" +
      "- Ngứa: Là một triệu chứng rất phổ biến.\n\n" +
      "- Đỏ: Vùng da bị viêm thường có màu đỏ, sưng tấy.\n\n" +
      "- Vảy hoặc mụn nước: Tùy thuộc vào loại viêm da, da có thể hình thành vảy hoặc mụn nước.\n\n" +
      "- Khô hoặc lột da: Da có thể khô và lột ra, đặc biệt trong các trường hợp như viêm da tiết bã và viêm da cơ địa.\n\n" +
      "Nguyên nhân:\n\n" +
      "- Dị ứng (chẳng hạn như phấn hoa, bụi, hoặc thực phẩm).\n\n" +
      "- Nhiễm trùng (virus, vi khuẩn, hoặc nấm).\n\n" +
      "- Yếu tố môi trường (thay đổi thời tiết, hóa chất).\n\n" +
      "- Di truyền (ở những người có tiền sử gia đình về bệnh da liễu).\n\n" +
      "Điều trị:\n\n" +
      "- Sử dụng thuốc: Có thể bao gồm kem kháng viêm, kem dưỡng ẩm, hoặc thuốc kháng histamin.\n\n" +
      "- Tránh tác nhân kích thích: Xác định và tránh những chất gây kích thích cho da.\n\n" +
      "- Chăm sóc da: Đảm bảo giữ cho vùng da bị ảnh hưởng sạch sẽ và ẩm mượt.\n\n" +
      "Lời khuyên:\n\n" +
      "Nếu bạn gặp phải triệu chứng viêm da kéo dài hoặc nghiêm trọng, hãy tìm kiếm sự tư vấn từ bác sĩ hoặc chuyên gia da liễu để được chẩn đoán và điều trị thích hợp.\n\n" +
      "Dạ, hy vọng thông tin này sẽ hữu ích cho bạn!",
    "cao huyết áp":
      "Dạ, cao huyết áp, hay còn gọi là tăng huyết áp, là một tình trạng y tế phổ biến, trong đó huyết áp trong các động mạch cao hơn mức bình thường. Dưới đây là một số thông tin chi tiết về cao huyết áp:\n\n" +
      "Định nghĩa:\n\n" +
      "- Tăng huyết áp được xác định khi huyết áp tâm thu (số trên) lớn hơn 140 mmHg và/hoặc huyết áp tâm trương (số dưới) lớn hơn hoặc bằng 90 mmHg theo tiêu chuẩn của Tổ chức Y tế Thế giới (WHO).\n\n" +
      "Nguyên nhân:\n\n" +
      "1. Tăng huyết áp nguyên phát: Không có nguyên nhân cụ thể, thường phát triển dần theo thời gian.\n\n" +
      "2. Tăng huyết áp thứ phát: Do một số tình trạng bệnh lý khác như:\n" +
      "   - Bệnh thận mạn\n" +
      "   - Béo phì\n" +
      "   - Hội chứng Cushing\n" +
      "   - Hẹp động mạch thận, và một số nguyên nhân khác.\n\n" +
      "Biến chứng:\n\n" +
      "Cao huyết áp có thể dẫn đến nhiều biến chứng nghiêm trọng, bao gồm:\n" +
      "- Tim mạch: Suy tim, bệnh mạch vành.\n" +
      "- Hệ thần kinh: Đột quỵ, sa sút trí nhớ.\n" +
      "- Thận: Bệnh thận mãn tính.\n" +
      "- Mắt: Bệnh võng mạc.\n\n" +
      "Triệu chứng:\n\n" +
      "Nhiều người bị cao huyết áp không có triệu chứng rõ ràng. Một số triệu chứng có thể bao gồm:\n" +
      "- Đau đầu\n" +
      "- Chóng mặt\n" +
      "- Chảy máu mũi\n" +
      "- Khó thở.\n\n" +
      "Điều trị:\n\n" +
      "1. Chế độ ăn uống và lối sống:\n" +
      "   - Giảm cân nếu thừa cân.\n" +
      "   - Hạn chế muối (natri) trong chế độ ăn.\n" +
      "   - Tăng cường hoạt động thể chất.\n" +
      "   - Giảm cơn căng thẳng và bỏ thuốc lá.\n\n" +
      "2. Thuốc điều trị:\n" +
      "   - Các loại thuốc hạ huyết áp, bao gồm thuốc lợi tiểu, thuốc chặn beta, thuốc ức chế ACE, và các thuốc khác theo chỉ định của bác sĩ.\n\n" +
      "Lời khuyên:\n\n" +
      "Nếu bạn có triệu chứng hoặc có nguy cơ cao mắc cao huyết áp, hãy tìm kiếm sự tư vấn từ bác sĩ để được kiểm tra và chẩn đoán kịp thời.\n\n" +
      "Dạ, hy vọng thông tin này hữu ích cho bạn!",
    "viêm khớp":
      "Dạ, viêm khớp là một tình trạng viêm nhiễm ở khớp, có thể dẫn đến đau, sưng, cứng khớp cũng như giảm khả năng vận động. Có nhiều loại viêm khớp khác nhau, phổ biến nhất là viêm khớp dạng thấp và viêm khớp thoái hóa. Dưới đây là các thông tin chi tiết về viêm khớp:\n\n" +
      "Các loại viêm khớp phổ biến:\n\n" +
      "1. Viêm khớp dạng thấp (Rheumatoid arthritis):\n" +
      "   - Là một bệnh lý tự miễn, nơi hệ miễn dịch của cơ thể tấn công các mô khớp. Triệu chứng bao gồm đau, sưng, và cứng khớp, đặc biệt là vào buổi sáng.\n\n" +
      "2. Viêm khớp thoái hóa (Osteoarthritis):\n" +
      "   - Là tình trạng thoái hóa khớp do tuổi tác, chấn thương, hay sử dụng quá mức. Triệu chứng bao gồm đau khớp, cứng khớp, và có thể có tiếng lạo xạo khi di chuyển.\n\n" +
      "3. Gout:\n" +
      "   - Là một loại viêm khớp xảy ra do sự tích tụ của axit uric trong máu, dẫn đến các cơn đau đột ngột và dữ dội, thường ở khớp ngón chân cái.\n\n" +
      "4. Viêm khớp nhiễm trùng (Infectious arthritis):\n" +
      "   - Do vi khuẩn hoặc virus gây ra, có thể dẫn đến tình trạng sưng đỏ và đau nhất quán ở khớp.\n\n" +
      "Triệu chứng:\n\n" +
      "- Đau nhức: Thường xuyên hoặc theo cơn, có thể kéo dài.\n" +
      "- Sưng: Vùng khớp bị ảnh hưởng thường sưng lên.\n" +
      "- Cứng khớp: Đặc biệt là sau khi nghỉ ngơi hoặc vào buổi sáng.\n" +
      "- Hạn chế vận động: Khó khăn trong việc di chuyển hoặc sử dụng khớp.\n\n" +
      "Nguyên nhân:\n\n" +
      "- Di truyền: Có tiền sử gia đình về các bệnh liên quan đến viêm khớp.\n" +
      "- Chấn thương: Chấn thương khớp có thể tăng nguy cơ mắc bệnh.\n" +
      "- Cân nặng: Thừa cân có thể tạo thêm áp lực lên các khớp.\n" +
      "- Nhiễm trùng: Một số bệnh nhiễm trùng có thể dẫn đến tình trạng viêm khớp.\n\n" +
      "Điều trị:\n\n" +
      "1. Thuốc giảm đau: Như paracetamol, NSAIDs (thuốc chống viêm không steroid).\n" +
      "2. Thuốc chống viêm: Có thể bao gồm corticosteroids hoặc thuốc điều chỉnh miễn dịch.\n" +
      "3. Vật lý trị liệu: Để cải thiện tính linh hoạt và sức mạnh khớp.\n" +
      "4. Phẫu thuật: Trong trường hợp nặng, có thể cần phẫu thuật để sửa chữa hoặc thay thế khớp.\n\n" +
      "Lời khuyên:\n\n" +
      "Nếu bạn gặp phải triệu chứng viêm khớp, hãy tìm kiếm sự tư vấn từ bác sĩ chuyên khoa để được chẩn đoán và điều trị đúng cách.\n\n" +
      "Dạ, hy vọng thông tin này sẽ giúp ích cho bạn trong việc hiểu biết về viêm khớp!",
    "tiểu đường loại 1":
      "Dạ, bệnh tiểu đường type 1, hay còn gọi là tiểu đường phụ thuộc insulin, là một rối loạn chuyển hóa mạn tính do cơ thể không sản xuất đủ insulin. Thường gặp ở trẻ em và thanh thiếu niên, nhưng có thể xảy ra ở mọi độ tuổi.\n\n" +
      "Nguyên nhân: Bệnh có thể do di truyền, tự miễn dịch khi hệ miễn dịch tấn công các tế bào sản xuất insulin trong tuyến tụy, hoặc các yếu tố môi trường như virus.\n\n" +
      "Triệu chứng: Bao gồm khát nước nhiều, tiểu nhiều, mệt mỏi, giảm cân không rõ nguyên nhân, đói thường xuyên, nhìn mờ, và có thể nhiễm keton với triệu chứng như buồn nôn, nôn, và đau bụng.\n\n" +
      "Chẩn đoán: Dựa vào xét nghiệm glucose huyết tương, HbA1c, và kiểm tra kháng thể.\n\n" +
      "Điều trị: Bao gồm tiêm insulin hàng ngày, duy trì chế độ ăn uống và luyện tập hợp lý, theo dõi đường huyết thường xuyên, và hiểu rõ về bệnh để quản lý tốt.\n\n" +
      "Phòng ngừa: Hiện chưa có cách phòng ngừa, nhưng hiểu rõ triệu chứng và điều trị kịp thời có thể giúp sống khỏe mạnh.\n\n" +
      "Nếu bạn có thêm câu hỏi hoặc cần thông tin chi tiết hơn, hãy cho tôi biết!",
    "tiểu đường loại 2":
      "Dạ, bệnh tiểu đường type 2, hay còn gọi là tiểu đường không phụ thuộc insulin, là tình trạng rối loạn mạn tính do kháng insulin và giảm tiết insulin từ tuyến tụy. Bệnh phổ biến ở người lớn tuổi, nhưng cũng xuất hiện ở trẻ em và thanh thiếu niên.\n\n" +
      "Nguyên nhân: Bao gồm yếu tố di truyền, thừa cân hoặc béo phì, lối sống ít vận động, chế độ ăn uống không lành mạnh, và nguy cơ tăng theo tuổi tác.\n\n" +
      "Triệu chứng: Khát nước nhiều, tiểu nhiều, mệt mỏi, đói nhiều, nhìn mờ, da khô và ngứa, vết thương lâu lành.\n\n" +
      "Chẩn đoán: Dựa vào xét nghiệm glucose huyết tương, HbA1c, và glucose ngẫu nhiên để đo nồng độ đường trong máu.\n\n" +
      "Điều trị: Thay đổi lối sống như chế độ ăn lành mạnh, tập thể dục thường xuyên, dùng thuốc hoặc insulin khi cần, và theo dõi đường huyết định kỳ.\n\n" +
      "Phòng ngừa: Duy trì lối sống lành mạnh, ăn uống cân bằng, tập thể dục thường xuyên, và kiểm tra sức khỏe định kỳ để phát hiện sớm nguy cơ mắc bệnh.\n\n" +
      "Nếu bạn cần thêm thông tin hoặc tư vấn, hãy cho tôi biết nhé!",
    "tim mạch vành":
      "Dạ, bệnh tim mạch vành, hay còn gọi là bệnh động mạch vành (CAD - Coronary Artery Disease), là một tình trạng nghiêm trọng xảy ra khi các động mạch cung cấp máu cho tim bị thu hẹp hoặc tắc nghẽn do xơ vữa động mạch.\n\n" +
      "Nguyên nhân: Gồm tăng huyết áp, hút thuốc lá, đái tháo đường, thừa cân béo phì, lối sống ít vận động, và yếu tố di truyền.\n\n" +
      "Triệu chứng: Đau thắt ngực, khó thở, mệt mỏi, tim đập nhanh hoặc không đều. Triệu chứng có thể không rõ ràng ở giai đoạn đầu.\n\n" +
      "Chẩn đoán: Bao gồm điện tâm đồ (ECG), siêu âm tim, chụp X-quang hoặc CT động mạch vành, và xét nghiệm máu để đánh giá nguy cơ.\n\n" +
      "Điều trị: Thay đổi lối sống, dùng thuốc hạ huyết áp, kiểm soát cholesterol, và trong trường hợp nặng có thể cần đặt stent hoặc phẫu thuật bắc cầu động mạch vành.\n\n" +
      "Phòng ngừa: Thực hiện chế độ ăn uống lành mạnh, tập thể dục đều đặn, kiểm soát cân nặng và huyết áp, tránh hút thuốc lá và quản lý căng thẳng.\n\n" +
      "Bệnh tim mạch vành có thể phòng ngừa và kiểm soát hiệu quả qua thay đổi lối sống và điều trị kịp thời. Nếu bạn cần thêm thông tin hoặc tư vấn, đừng ngần ngại hỏi nhé!",
    "tim bẩm sinh":
      "Dạ, bệnh tim bẩm sinh là một dị tật xảy ra ở tim trong giai đoạn phát triển thai nhi. Đây là một bệnh lý nghiêm trọng nhưng có thể điều trị để cải thiện chất lượng cuộc sống.\n\n" +
      "Nguyên nhân: Có thể do yếu tố di truyền, môi trường, hoặc tình trạng sức khỏe của mẹ như tiểu đường, cao huyết áp, nhiễm trùng khi mang thai, hoặc việc tiếp xúc với rượu và thuốc lá.\n\n" +
      "Phân loại: \n1.  Bệnh tím (Cyanotic heart defects) : Gây tím tái do máu thiếu oxy (ví dụ: tứ chứng Fallot).\n2.  Bệnh không tím (Acyanotic heart defects) : Không gây tím tái nhưng ảnh hưởng cấu trúc tim (ví dụ: thông liên thất, thông liên nhĩ).\n\n" +
      "Triệu chứng: Gồm da tím tái, khó thở, mệt mỏi, phù nề, và hồi hộp.\n\n" +
      "Chẩn đoán: Thông qua khám lâm sàng, siêu âm tim, X-quang ngực, và điện tâm đồ (ECG).\n\n" +
      "Điều trị: \n- Theo dõi: Áp dụng cho trường hợp nhẹ.\n- Thay đổi lối sống: Kết hợp chế độ ăn uống và tập luyện.\n- Thuốc: Kiểm soát triệu chứng và hỗ trợ tim.\n- Phẫu thuật: Sửa chữa dị tật trong trường hợp nghiêm trọng.\n\n" +
      "Phòng ngừa: Đảm bảo sức khỏe trước và trong thai kỳ, tiêm phòng bệnh rubella, và kiểm soát các bệnh lý mãn tính như tiểu đường.\n\n" +
      "Nếu bạn cần thêm thông tin hoặc hỗ trợ, hãy cho tôi biết nhé!",
    "hen phế quản":
      "Dạ, bệnh hen phế quản, hay hen suyễn, là tình trạng mãn tính của đường hô hấp, trong đó đường thở bị viêm và hẹp lại, làm cản trở sự lưu thông của không khí.\n\n" +
      "Nguyên nhân: Thường do nhạy cảm miễn dịch với các tác nhân kích thích như dị ứng phấn hoa, bụi, vật nuôi, ô nhiễm không khí, khói thuốc lá, thời tiết, hoặc nhiễm trùng đường hô hấp.\n\n" +
      "Triệu chứng:\n-  Khó thở : Cảm giác không đủ không khí.\n-  Ho : Đặc biệt là ho khan, thường gặp vào ban đêm hoặc khi hoạt động.\n-  Khò khè : Thở ra âm thanh như tiếng rít.\n-  Đau ngực : Cảm giác nặng nề ở ngực.\n\n" +
      "Chẩn đoán: Thông qua tiền sử bệnh, khám lâm sàng, đo chức năng phổi (spirometry), và xét nghiệm dị ứng để tìm các yếu tố kích thích.\n\n" +
      "Điều trị:\n-  Thuốc điều trị cơn cấp : Thuốc giãn phế quản nhanh để giảm triệu chứng tức thời.\n-  Thuốc kiểm soát lâu dài : Corticosteroid hít giúp giảm viêm đường hô hấp.\n-  Tránh các tác nhân kích thích : Bụi, phấn hoa, khói thuốc, và ô nhiễm.\n\n" +
      "Phòng ngừa:\n- Giữ không khí trong nhà sạch sẽ.\n- Tránh tiếp xúc với tác nhân dị ứng.\n- Tập thể dục điều độ và tập thở.\n- Tiêm vắc-xin cúm hằng năm nếu cần.\n\n" +
      "Bệnh hen phế quản có thể kiểm soát nếu được chẩn đoán và điều trị kịp thời. Nếu bạn cần thêm thông tin hoặc có thắc mắc, hãy cho tôi biết nhé!",
    "trầm cảm":
      "Dạ, bệnh trầm cảm là một rối loạn tâm lý gây ra cảm giác buồn bã sâu sắc, mất hứng thú, và ảnh hưởng lớn đến cuộc sống. Đây là một bệnh lý nghiêm trọng, có thể ảnh hưởng cả về thể chất và tinh thần.\n\n" +
      "Nguyên nhân: Các nguyên nhân bao gồm yếu tố sinh học (hoá học não, di truyền), tâm lý (áp lực, stress), môi trường (khủng hoảng cá nhân, mất mát), và yếu tố phát triển (tuổi thơ khó khăn).\n\n" +
      "Triệu chứng:\n-  Buồn bã kéo dài : Cảm giác chán nản, tuyệt vọng.\n-  Mất hứng thú : Không còn quan tâm đến những hoạt động từng yêu thích.\n-  Rối loạn giấc ngủ : Khó ngủ hoặc ngủ quá nhiều.\n-  Thay đổi cân nặng : Tăng hoặc giảm không lý do.\n-  Khó tập trung : Cảm thấy mệt mỏi và khó đưa ra quyết định.\n-  Suy nghĩ tiêu cực : Ý nghĩ tự làm hại bản thân hoặc tự sát.\n\n" +
      "Chẩn đoán: Thực hiện qua tư vấn tâm lý, tiêu chuẩn DSM-5, và đánh giá từ bác sĩ chuyên khoa.\n\n" +
      "Điều trị:\n-  Tâm lý trị liệu : Tư vấn tâm lý, liệu pháp nhận thức hành vi (CBT) để đối phó cảm xúc.\n-  Thuốc : Antidepressants giúp cân bằng hoá học não.\n-  Thay đổi lối sống : Tập thể dục, ăn uống lành mạnh, duy trì các hoạt động xã hội.\n\n" +
      "Phòng ngừa:\n- Duy trì lối sống lành mạnh, kết nối với bạn bè và gia đình.\n- Quan tâm đến sức khỏe tâm thần và tìm kiếm sự hỗ trợ khi cần.\n\n" +
      "Bệnh trầm cảm có thể nghiêm trọng, vì vậy phát hiện sớm và điều trị kịp thời là cần thiết. Nếu bạn hoặc người thân có triệu chứng trầm cảm, hãy tìm sự hỗ trợ từ các chuyên gia y tế. Nếu cần thêm thông tin, vui lòng cho tôi biết nhé!",
    "rối loạn ám ảnh cưỡng chế":
      "Dạ, rối loạn ám ảnh cưỡng chế (OCD) là một rối loạn tâm thần đặc trưng bởi các ý nghĩ ám ảnh không mong muốn và các hành động cưỡng chế để giảm lo âu. Đây là một tình trạng phức tạp và có thể ảnh hưởng lớn đến cuộc sống hàng ngày.\n\n" +
      "Nguyên nhân:\n-  Di truyền : OCD có thể có tính di truyền trong gia đình.\n-  Hóa học não : Mất cân bằng các chất dẫn truyền thần kinh như serotonin có liên quan đến OCD.\n-  Yếu tố môi trường : Trải nghiệm căng thẳng như chấn thương, áp lực cuộc sống có thể làm nặng thêm triệu chứng.\n-  Tâm lý : Xu hướng nghĩ về sự kiểm soát, hoàn hảo có thể liên quan đến sự phát triển OCD.\n\n" +
      "Triệu chứng:\n-  Ám ảnh : Ý nghĩ, hình ảnh, hoặc cảm giác liên tục không mong muốn (như lo lắng về sự sạch sẽ, sợ hãi về hậu quả nếu không thực hiện hành động nhất định).\n-  Cưỡng chế : Các hành động hoặc nghi thức lặp đi lặp lại mà người bệnh cảm thấy phải làm để giảm lo âu (ví dụ rửa tay liên tục, kiểm tra nhiều lần, sắp xếp đồ vật).\n\n" +
      "Chẩn đoán: OCD thường được chẩn đoán qua lịch sử bệnh, các triệu chứng đặc trưng, và tiêu chuẩn DSM-5.\n\n" +
      "Điều trị:\n-  Tâm lý trị liệu : Liệu pháp hành vi nhận thức (CBT) đã chứng minh hiệu quả.\n-  Thuốc : Các thuốc chống trầm cảm (SSRIs) thường được kê để giảm triệu chứng.\n-  Giáo dục và hỗ trợ : Hiểu rõ về rối loạn giúp bệnh nhân và gia đình hỗ trợ tốt hơn.\n\n" +
      "Phòng ngừa:\n- Quản lý căng thẳng, tạo môi trường hỗ trợ và tìm kiếm hỗ trợ y tế sớm có thể giảm thiểu nguy cơ tiến triển triệu chứng.\n\n" +
      "Nếu cần thêm thông tin về OCD, tư vấn điều trị hoặc các thủ tục liên quan, vui lòng cho tôi biết nhé!",
    "viêm da cơ địa":
      "Dạ, viêm da cơ địa (hay còn gọi là chàm) là tình trạng viêm da mãn tính và tái phát, gây khó chịu và làm giảm khả năng bảo vệ của da.\n\n" +
      "Nguyên nhân:\n- Di truyền: Viêm da cơ địa thường có yếu tố di truyền từ gia đình.\n-  Môi trường : Các yếu tố như bụi, phấn hoa, chất gây dị ứng và thay đổi thời tiết có thể kích thích tình trạng viêm.\n-  Hệ miễn dịch : Phản ứng quá mức của hệ miễn dịch với các yếu tố bên ngoài dẫn đến viêm và ngứa.\n-  Yếu tố tâm lý : Căng thẳng và lo âu có thể làm tình trạng tồi tệ hơn.\n\n" +
      "Triệu chứng:\n-  Ngứa : Cảm giác ngứa rát, nhất là vào ban đêm.\n-  Da khô : Da trở nên khô, nứt nẻ và dễ kích thích.\n-  Mẩn đỏ : Vùng da viêm thường sưng và có màu đỏ.\n-  Tổn thương da : Xuất hiện các vết chàm nhỏ, chảy dịch hoặc đóng vảy.\n-  Biến đổi màu da : Da có thể trở nên sậm hoặc sáng màu hơn.\n\n" +
      "Chẩn đoán: Thường dựa vào tiền sử bệnh, triệu chứng và khám lâm sàng.\n\n" +
      "Điều trị:\n-  Kem dưỡng ẩm : Giữ cho da ẩm để ngăn ngừa khô và kích thích.\n-  Thuốc tại chỗ : Corticosteroid và thuốc chống viêm để giảm viêm và ngứa.\n-  Thuốc chống dị ứng : Giúp giảm ngứa và khó chịu.\n-  Điều trị toàn thân : Trong trường hợp nặng, có thể dùng thuốc uống hoặc liệu pháp ánh sáng.\n\n" +
      "Phòng ngừa:\n-  Tránh yếu tố kích thích : Nhận diện và tránh các tác nhân gây kích thích.\n-  Giữ ẩm cho da : Dùng kem dưỡng ẩm thường xuyên.\n-  Quản lý stress : Áp dụng yoga, thiền hoặc các hoạt động giảm căng thẳng.\n\n" +
      "Viêm da cơ địa là bệnh mãn tính và cần quản lý lâu dài. Nếu bạn có câu hỏi hoặc cần thêm hỗ trợ, hãy cho tôi biết nhé!",
    "viêm khớp dạng thấp":
      "Dạ, bệnh viêm khớp dạng thấp (Rheumatoid Arthritis - RA) là một bệnh tự miễn mãn tính, gây viêm đau và tổn thương khớp. Bệnh có thể trở nên nghiêm trọng nếu không được điều trị kịp thời.\n\n" +
      "Nguyên nhân:\n-   Di truyền  : Tiền sử gia đình mắc bệnh có thể tăng nguy cơ.\n-   Hệ miễn dịch  : Hệ miễn dịch tấn công nhầm các mô khớp.\n-   Yếu tố môi trường  : Nhiễm trùng, thuốc lá, và ô nhiễm có thể góp phần vào bệnh.\n\n" +
      "Triệu chứng:\n-   Đau và sưng khớp  : Thường ở các khớp nhỏ như ngón tay, cổ tay.\n-   Cứng khớp  : Đặc biệt vào buổi sáng hoặc sau thời gian không vận động.\n-   Mệt mỏi, sốt nhẹ, giảm cân không rõ lý do  .\n\n" +
      "Chẩn đoán: Dựa vào khám lâm sàng, xét nghiệm máu (RF, anti-CCP) và hình ảnh học như X-quang hoặc MRI.\n\n" +
      "Điều trị:\n-   NSAIDs  : Giảm đau và viêm.\n-   Corticoid  : Giảm viêm nhanh chóng.\n-   DMARDs  : Như methotrexate, làm chậm tiến triển của bệnh.\n-   Điều trị sinh học  : Được sử dụng cho trường hợp nặng.\n\n" +
      "Phòng ngừa và quản lý:\n-   Thay đổi lối sống  : Duy trì thể chất đều đặn, ăn uống lành mạnh và giữ cân nặng hợp lý.\n-   Quản lý stress  : Áp dụng yoga, thiền.\n-   Khám định kỳ  : Để theo dõi sức khỏe và tiến triển của bệnh.\n\n" +
      "Viêm khớp dạng thấp là bệnh mạn tính, vì vậy hãy thăm khám bác sĩ để có kế hoạch điều trị và quản lý lâu dài. Nếu cần thêm hỗ trợ, hãy cho tôi biết nhé!",
    "viêm tụy cấp":
      "Dạ, bệnh viêm tụy cấp (Acute Pancreatitis) là tình trạng viêm đột ngột của tụy, có thể gây ra biến chứng nghiêm trọng nếu không được chẩn đoán và điều trị kịp thời.\n\n" +
      "Nguyên nhân:\n1.    Sỏi mật   : Nguyên nhân phổ biến nhất, gây ứ đọng dịch tụy và viêm.\n2.    Rượu   : Uống rượu quá mức có thể gây viêm tụy cấp.\n3.    Chấn thương   : Vết thương bụng có thể làm tổn thương tụy.\n4.    Một số thuốc   : Thiazide, NSAIDs có thể gây viêm tụy.\n5.    Nhiễm trùng   : Nhiễm virus như viêm gan có thể ảnh hưởng đến tụy.\n6.    Bệnh lý khác   : Bệnh tiểu đường, rối loạn di truyền, tăng lipid máu.\n\n" +
      "Triệu chứng:\n-    Đau bụng   : Đau đột ngột, dữ dội, thường ở vùng bụng trên, có thể lan ra phía sau.\n-    Buồn nôn và nôn   .\n-    Sốt   : Nhiệt độ cơ thể có thể tăng.\n-    Nhịp tim nhanh và huyết áp thấp   : Dấu hiệu của tình trạng sốc.\n-    Vàng da   : Nếu viêm tụy ảnh hưởng đến ống mật.\n\n" +
      "Chẩn đoán: Dựa vào lịch sử y tế, khám thực thể, xét nghiệm máu (amylase, lipase), và hình ảnh học (siêu âm, CT scan).\n\n" +
      "Điều trị:\n-    Hỗ trợ điều trị   : Nhập viện, nghỉ ngơi, truyền dịch tĩnh mạch.\n-    Kiêng ăn   : Để tụy nghỉ ngơi.\n-    Thuốc giảm đau   : Để kiểm soát đau.\n-    Điều trị nguyên nhân   : Phẫu thuật nếu do sỏi mật.\n-    Kháng sinh   : Nếu có nhiễm trùng.\n\n" +
      "Phòng ngừa:\n-    Hạn chế uống rượu   : Uống vừa phải hoặc tránh hoàn toàn.\n-    Chế độ ăn lành mạnh   : Tránh thức ăn nhiều chất béo và đường.\n-    Quản lý bệnh lý liên quan   : Kiểm soát tiểu đường, rối loạn lipid.\n\n" +
      "Viêm tụy cấp cần được chẩn đoán và điều trị kịp thời để tránh biến chứng nguy hiểm. Nếu có triệu chứng liên quan, hãy tham khảo ý kiến bác sĩ ngay lập tức. Nếu cần thêm thông tin, vui lòng cho tôi biết!",
    "viêm da dị ứng":
      "Dạ, viêm da dị ứng (Atopic Dermatitis) là một tình trạng viêm da mạn tính, phổ biến ở trẻ em nhưng cũng có thể xảy ra ở bất kỳ lứa tuổi nào. Đây là một phần của bệnh lý dị ứng, liên quan đến dị ứng thức ăn, hen suyễn và viêm mũi dị ứng.\n\n" +
      "Nguyên nhân và yếu tố nguy cơ:\n1.    Gen di truyền   : Thường xuất hiện trong các gia đình có tiền sử dị ứng.\n2.    Yếu tố môi trường   : Các tác nhân như bụi bẩn, mạt nhà, phấn hoa hay hóa chất có thể kích thích.\n3.    Thời tiết   : Thời tiết lạnh, khô hanh có thể làm trầm trọng thêm tình trạng da.\n4.    Thực phẩm   : Một số người có thể nhạy cảm với thực phẩm như sữa, trứng, hay hạt đậu.\n5.    Căng thẳng   : Căng thẳng tâm lý có thể làm tăng triệu chứng.\n\n" +
      "Triệu chứng:\n-    Ngứa   : Là triệu chứng chủ yếu, có thể rất dữ dội và ảnh hưởng đến giấc ngủ.\n-    Da khô   : Da dễ bị khô, có thể nứt nẻ.\n-    Nốt đỏ   : Vùng da bị viêm có thể đỏ và phù.\n-    Da dày   : Vùng da bị ngứa có thể trở nên dày hơn nếu cào gãi.\n-    Mụn nước   : Có thể có mụn nước tiết dịch hoặc vảy.\n\n" +
      "Chẩn đoán: Dựa trên lịch sử bệnh, khám lâm sàng và có thể cần xét nghiệm dị ứng để tìm tác nhân gây ra.\n\n" +
      "Điều trị:\n-    Kem dưỡng ẩm   : Giữ ẩm cho da và giảm khô.\n-    Corticoid tại chỗ   : Giảm viêm và ngứa.\n-    Thuốc kháng histamin   : Giảm ngứa và giúp cải thiện giấc ngủ.\n-    Liệu pháp ánh sáng   : Đối với các trường hợp nặng.\n-    Tránh yếu tố kích thích   : Nhận diện và loại bỏ các tác nhân gây ra triệu chứng.\n\n" +
      "Phòng ngừa:\n- Giữ ẩm cho da thường xuyên.\n- Tắm với nước ấm và không quá lâu, sau đó thoa kem dưỡng ẩm ngay lập tức.\n- Tránh các sản phẩm có chứa hương liệu, phẩm màu hay hóa chất độc hại.\n- Sử dụng xà bông dịu nhẹ và không gây kích ứng.\n\n" +
      "Viêm da dị ứng có thể ảnh hưởng đến chất lượng cuộc sống. Nếu bạn hoặc người thân gặp triệu chứng này, hãy tham khảo ý kiến bác sĩ để điều trị kịp thời và hiệu quả. Nếu cần thêm thông tin, vui lòng cho tôi biết!",
    "viêm khớp do gout":
      "Dạ, viêm khớp do gout (Gouty Arthritis) là một loại viêm khớp viêm nhiễm, gây đau và sưng ở các khớp do sự tích tụ của tinh thể urat. Tình trạng này xảy ra khi nồng độ axit uric trong máu tăng cao, dẫn đến sự hình thành các tinh thể urat.\n\n" +
      "Nguyên nhân:\n1.    Tăng axit uric   : Do cơ thể sản xuất quá nhiều axit uric hoặc thận không loại bỏ đủ axit uric.\n2.    Yếu tố môi trường và lối sống   : Chế độ ăn uống giàu purine, uống rượu, béo phì và ít vận động.\n3.    Yếu tố di truyền   : Nếu có người trong gia đình mắc bệnh gout, nguy cơ mắc bệnh cao hơn.\n4.    Các tình trạng sức khỏe khác   : Như bệnh thận mãn tính, huyết áp cao, tiểu đường.\n\n" +
      "Triệu chứng:\n-    Cơn đau khớp   : Đau đột ngột, dữ dội, kéo dài từ vài giờ đến vài ngày, thường xảy ra vào ban đêm.\n-    Sưng và đỏ tại khớp   : Khớp bị sưng, đỏ và nóng.\n-    Hạn chế vận động   : Khó khăn trong di chuyển khớp.\n-    Nốt tophi   : Xuất hiện ở các khớp như ngón tay, khuỷu tay, vành tai trong trường hợp mãn tính.\n\n" +
      "Chẩn đoán:\n- Dựa trên lịch sử bệnh, xét nghiệm máu đo nồng độ axit uric, xét nghiệm dịch khớp và hình ảnh học (X-quang, siêu âm).\n\n" +
      "Điều trị:\n-    Thuốc   : NSAIDs (ibuprofen), colchicine, corticosteroid và thuốc hạ axit uric (allopurinol, febuxostat).\n-    Thay đổi lối sống   : Điều chỉnh chế độ ăn, uống đủ nước, duy trì cân nặng lành mạnh và tập thể dục đều đặn.\n\n" +
      "Phòng ngừa:\n- Tuân thủ chế độ ăn uống hợp lý, theo dõi nồng độ axit uric định kỳ và sử dụng thuốc theo chỉ định bác sĩ.\n\n" +
      "Viêm khớp do gout có thể ảnh hưởng lớn đến chất lượng cuộc sống, nếu bạn gặp triệu chứng này hoặc nghi ngờ mắc bệnh, hãy tham khảo bác sĩ để được điều trị kịp thời!",
    "viêm thận":
      "Dạ, viêm thận (Nephritis) là tình trạng viêm nhiễm xảy ra trong thận, có thể ảnh hưởng đến chức năng của thận và gây ra nhiều triệu chứng khác nhau.\n\n" +
      "Nguyên nhân:\n1.    Nhiễm trùng   : Do vi khuẩn hoặc virus, đặc biệt là viêm cầu thận sau nhiễm liên cầu khuẩn (thường xảy ra sau viêm họng).\n2.    Bệnh tự miễn   : Hệ miễn dịch tấn công các tế bào của cơ thể, như trong bệnh lupus ban đỏ hoặc viêm thận IgA.\n3.    Rối loạn chuyển hóa   : Tiểu đường và tăng huyết áp có thể dẫn đến viêm thận.\n4.    Ảnh hưởng từ thuốc   : Một số loại thuốc (như kháng sinh hoặc thuốc chống viêm) có thể gây tổn thương thận.\n\n" +
      "Triệu chứng:\n-    Đau lưng hoặc đau vùng thận   : Có thể xảy ra ở mỗi bên thận.\n-    Sưng   : Do giữ nước, gây sưng chi hoặc mặt.\n-    Nước tiểu bất thường   : Bao gồm nước tiểu có máu (huyết niệu), đục, hoặc có bọt (do protein trong nước tiểu).\n-    Tiểu buốt, tiểu rắt   : Cảm giác gấp gáp khi tiểu.\n-    Mệt mỏi và yếu đuối   : Do thiếu máu.\n-    Tăng huyết áp   : Do rối loạn trong kiểm soát nước và muối.\n\n" +
      "Chẩn đoán:\n- Khám lâm sàng, xét nghiệm nước tiểu, xét nghiệm máu (creatinine, ure), hình ảnh học (siêu âm thận hoặc X-quang).\n\n" +
      "Điều trị:\n-    Kháng sinh   : Nếu viêm thận do nhiễm trùng.\n-    Thuốc kháng viêm   : Như corticosteroid để giảm viêm.\n-    Điều chỉnh chế độ ăn uống   : Giảm muối và protein nếu cần.\n-    Điều trị các bệnh lý nền   : Như tiểu đường và huyết áp cao.\n-    Điều trị triệu chứng   : Giảm đau và kiểm soát huyết áp.\n\n" +
      "Phòng ngừa:\n- Uống đủ nước, kiểm soát huyết áp và lượng đường trong máu, hạn chế sử dụng thuốc NSAID khi không cần thiết.\n\n" +
      "Viêm thận cần được chẩn đoán và điều trị kịp thời để tránh biến chứng nghiêm trọng. Nếu bạn có triệu chứng hoặc nghi ngờ mắc bệnh, hãy tham khảo bác sĩ để được điều trị sớm.",
    "suy tim":
      "Dạ, suy tim là một tình trạng bệnh lý nghiêm trọng, xảy ra khi tim không đủ khả năng bơm máu để cung cấp oxy và dưỡng chất cần thiết cho cơ thể. Bệnh này có thể phát sinh từ nhiều nguyên nhân khác nhau và có thể gây ra nhiều biến chứng nguy hiểm nếu không được điều trị kịp thời.\n\n" +
      "Các loại suy tim:\n1.    Suy tim trái   : Xảy ra khi tâm thất trái không thể bơm máu hiệu quả, dẫn đến tích tụ dịch trong phổi và gây khó thở.\n2.    Suy tim phải   : Do tâm thất phải không hoạt động tốt, thường gây phù nề ở chân và bụng.\n3.    Suy tim toàn bộ   : Khi cả hai phía (trái và phải) của tim đều không hoạt động đúng cách.\n\n" +
      "Nguyên nhân:\n-    Bệnh động mạch vành   : Là nguyên nhân phổ biến nhất, mà mạch máu cung cấp máu cho tim bị hẹp hoặc chặn lại.\n-    Tăng huyết áp   : Duy trì áp lực cao trong động mạch cũng gây ra căng thẳng cho tim.\n-    Bệnh van tim   : Các vấn đề với van tim có thể làm tim không hoạt động hiệu quả.\n-    Bệnh tim bẩm sinh   : Các khuyết tật xuất hiện từ khi sinh.\n-    Bệnh cơ tim   : Gồm bệnh cơ tim giãn, viêm cơ tim do nhiễm virus.\n\n" +
      "Triệu chứng:\n-    Khó thở   : Đặc biệt khi hoạt động hoặc khi nằm.\n-    Mệt mỏi   : Cảm giác thiếu năng lượng và khó khăn trong các hoạt động hàng ngày.\n-    Phù nề   : Nghẽn dịch thường ở chân, mắt cá chân và bụng.\n-    Ho khan hoặc kèm theo đờm   : Thường là dấu hiệu của tình trạng tích tụ dịch ở phổi.\n-    Nhịp tim nhanh hoặc bất thường   : Tim có thể đập nhanh hơn bình thường.\n\n" +
      "Chẩn đoán:\nChẩn đoán suy tim thường bao gồm:\n- Khám lâm sàng: Đánh giá triệu chứng và tiền sử bệnh.\n- Xét nghiệm: Xét nghiệm máu, siêu âm tim, điện tâm đồ và chụp X-quang ngực.\n- Thăm dò chức năng tim: Để đánh giá khả năng bơm máu của tim.\n\n" +
      "Điều trị:\nĐiều trị suy tim có thể bao gồm:\n-    Thay đổi lối sống   : Chế độ ăn uống lành mạnh, giảm muối, tập thể dục nhẹ và bỏ thuốc lá.\n-    Thuốc   : Sử dụng các loại thuốc như thuốc lợi tiểu, thuốc ức chế men chuyển Angiotensin (ACE), thuốc chẹn beta, và thuốc giãn mạch.\n-    Can thiệp phẫu thuật   : Trong một số trường hợp nặng, có thể cần phẫu thuật để sửa chữa các van tim hoặc đặt thiết bị hỗ trợ tim.\n\n" +
      "Phòng ngừa:\nĐể giảm nguy cơ mắc suy tim, người bệnh cần:\n- Kiểm soát huyết áp và cholesterol.\n- Duy trì trọng lượng cơ thể hợp lý.\n- Thực hiện các cuộc kiểm tra sức khỏe định kỳ.\n- Tránh xa thuốc lá và hạn chế tiêu thụ rượu.\n\n" +
      "Suy tim là một tình trạng cần được theo dõi và điều trị cẩn thận. Nếu bạn có các triệu chứng nghi ngờ, hãy tham khảo ý kiến bác sĩ để được chẩn đoán và điều trị kịp thời.",
    "viêm bàng quang":
      "Dạ, viêm bàng quang, còn gọi là viêm bàng quang cấp tính, là một tình trạng viêm nhiễm xảy ra trong bàng quang, thường gây ra bởi các loại vi khuẩn. Đây là một dạng nhiễm trùng đường tiết niệu phổ biến, đặc biệt ở phụ nữ. Dưới đây là một số thông tin chi tiết về viêm bàng quang:\n\n" +
      "Nguyên nhân:\n-    Vi khuẩn   : Thường do vi khuẩn như Escherichia coli (E. coli) từ đường ruột xuất hiện trong đường tiết niệu.\n-    Nhiễm trùng   : Có thể xảy ra sau khi quan hệ tình dục, sử dụng các thiết bị y tế trong bàng quang hoặc do các bệnh lý nền như tiểu đường.\n-    Các yếu tố nguy cơ   :\n  - Đi tiểu không thường xuyên.\n  - Sự thay đổi nội tiết, như trong thời kỳ mãn kinh.\n  - Sử dụng các sản phẩm vệ sinh phụ nữ có hóa chất mạnh.\n\n" +
      "Triệu chứng:\nCác triệu chứng phổ biến của viêm bàng quang bao gồm:\n-    Tiểu buốt, tiểu rắt   : Cảm giác đau và khó chịu khi đi tiểu, thường có cảm giác muốn đi tiểu nhiều lần.\n-    Đau bụng dưới   : Cảm giác đau nhẹ hoặc áp lực ở vùng bụng dưới.\n-    Nước tiểu có mùi hôi   : Mùi bất thường hoặc có thể có màu đục.\n-    Đôi khi sốt nhẹ   : Tuy không phổ biến, nhưng có thể xảy ra.\n\n" +
      "Chẩn đoán:\n-    Khám lâm sàng   : Bác sĩ có thể hỏi về triệu chứng và tiền sử bệnh để xác định kỹ lưỡng tình trạng.\n-    Xét nghiệm nước tiểu   : Phân tích mẫu nước tiểu để xác định sự hiện diện của vi khuẩn, tế bào bạch cầu và hồng cầu.\n-    Siêu âm hoặc nội soi   : Có thể cần thiết trong trường hợp khó chẩn đoán hoặc theo dõi diễn tiến.\n\n" +
      "Điều trị:\nĐiều trị viêm bàng quang thường bao gồm:\n-    Kháng sinh   : Để tiêu diệt vi khuẩn gây nhiễm trùng, thường được bác sĩ chỉ định dựa trên kết quả xét nghiệm.\n-    Thuốc giảm đau   : Để giảm triệu chứng đau và khó chịu trong quá trình điều trị.\n-    Thay đổi lối sống   : Uống đủ nước, vệ sinh vùng kín sạch sẽ và tránh các yếu tố gây kích ứng như xà phòng hay sản phẩm hóa học mạnh.\n\n" +
      "Phòng ngừa:\n-    Uống đủ nước    để giúp rửa trôi vi khuẩn trong đường tiết niệu.\n-    Tiêu hóa hợp lý   : Hạn chế sử dụng thực phẩm có khả năng gây kích ứng cho bàng quang, như caffein, rượu, và thực phẩm cay.\n-    Thực hiện vệ sinh cá nhân đúng cách    trước và sau khi quan hệ tình dục.\n\n" +
      "Viêm bàng quang có thể gây ra nhiều khó chịu, nhưng nếu được phát hiện và điều trị kịp thời, bệnh có thể hồi phục nhanh chóng. Nếu bạn có triệu chứng nghi ngờ viêm bàng quang, hãy tham khảo ý kiến bác sĩ để có được sự tư vấn và điều trị thích hợp.",
    "viêm gan A":
      "Dạ, viêm gan A là một bệnh viêm nhiễm gan cấp tính do virus viêm gan A (HAV) gây ra. Bệnh thường lây lan qua đường tiêu hóa, đặc biệt là do ăn uống phải thực phẩm hoặc nước bị nhiễm virus. Dưới đây là một số thông tin chi tiết về viêm gan A:\n\n" +
      "Nguyên nhân:\n-    Virus viêm gan A (HAV)    là tác nhân duy nhất gây ra bệnh. Virus này thường được tìm thấy trong phân của người nhiễm bệnh và có thể lây lan qua tiếp xúc gần gũi hoặc qua việc tiêu thụ thực phẩm và nước bị ô nhiễm.\n\n" +
      "Triệu chứng:\nThời gian ủ bệnh của viêm gan A thường từ 15 đến 50 ngày, và triệu chứng có thể bao gồm:\n-    Mệt mỏi   \n-    Chán ăn   \n-    Đau bụng    (thường ở vùng hạ sườn phải)\n-    Buồn nôn và nôn   \n-    Sốt nhẹ   \n-    Vàng da và vàng mắt   \n-    Nước tiểu sậm màu   \n-    Phân nhạt màu   \n\n" +
      "Chẩn đoán:\nChẩn đoán viêm gan A thường dựa trên triệu chứng lâm sàng và các xét nghiệm như:\n-    Xét nghiệm máu tìm HAV IgM   , là chỉ báo cho việc nhiễm virus cấp tính.\n-    Xét nghiệm chức năng gan    (ALT, AST, bilirubin) có thể cho thấy tổn thương gan.\n\n" +
      "Điều trị:\nKhông có điều trị đặc hiệu cho viêm gan A. Hầu hết người bệnh sẽ hồi phục hoàn toàn mà không cần can thiệp y tế. Tuy nhiên, có một số biện pháp hỗ trợ có thể được thực hiện:\n-    Nghỉ ngơi   \n-    Uống đủ nước    để ngăn ngừa mất nước\n-    Hạn chế các loại thực phẩm có chứa nhiều chất béo và đồ uống có cồn   \n\n" +
      "Phòng ngừa:\n-    Tiêm vacxin viêm gan A   : Đây là biện pháp hiệu quả nhất để phòng ngừa bệnh.\n-    Thực hành vệ sinh thực phẩm   : Nấu chín thực phẩm, uống nước sạch và rửa tay thường xuyên.\n-    Tránh tiếp xúc với nguồn lây nhiễm   .\n\n" +
      "Viêm gan A là một bệnh có thể tự khỏi, nhưng phương pháp phòng ngừa, đặc biệt là qua tiêm vắc xin, là rất quan trọng để giảm nguy cơ mắc bệnh này. Nếu bạn nghi ngờ mình có các triệu chứng của bệnh, hãy đến cơ sở y tế để được kiểm tra và điều trị kịp thời.",
    "viêm amidan":
      "Dạ, viêm amidan hay viêm amidan cấp tính là tình trạng viêm nhiễm của amidan, một cấu trúc lympho ở cổ giúp cơ thể chống lại nhiễm trùng. Viêm amidan có thể xảy ra ở mọi lứa tuổi, nhưng thường gặp hơn ở trẻ em và thanh niên. Dưới đây là thông tin chi tiết về viêm amidan:\n\n" +
      "Nguyên nhân:\n1.    Nhiễm virus   : Các virus như virus cúm, virus cảm lạnh, hoặc virus Epstein-Barr có thể gây ra viêm amidan.\n2.    Nhiễm vi khuẩn   : Vi khuẩn như    Streptococcus nhóm A   , thường gây ra viêm họng, cũng là nguyên nhân phổ biến gây viêm amidan.\n\n" +
      "Triệu chứng:\nCác triệu chứng của viêm amidan có thể bao gồm:\n-    Đau họng   : Thường đau và khó nuốt.\n-    Ngứa họng   : Cảm giác khó chịu ở họng và amidan.\n-    Vướng mắc trong họng   : Cảm giác giống như có vật cản trong họng.\n-    Ho khan   : Thường xuyên ho do đau họng.\n-    Hơi thở hôi   : Do viêm và sự tồn tại của mủ.\n-    Sốt   : Có thể sốt nhẹ hoặc sốt cao tùy thuộc vào nguyên nhân.\n\n" +
      "Chẩn đoán:\n1.    Khám lâm sàng   : Bác sĩ sẽ kiểm tra họng và amidan, thấy amidan sưng đỏ, có thể có mủ hoặc bã đậu.\n2.    Xét nghiệm nhanh   : Có thể xét nghiệm nhanh để xác định có sự hiện diện của vi khuẩn Streptococcus hay không.\n3.    Cận lâm sàng   : Nếu có nghi ngờ về bệnh lý khác, có thể cần làm thêm các xét nghiệm máu hoặc sinh thiết.\n\n" +
      "Điều trị:\n1.    Điều trị bảo tồn   :\n   -    Thuốc   : Sử dụng kháng sinh nếu có nguyên nhân vi khuẩn; thuốc giảm đau, thuốc chống viêm để giảm các triệu chứng.\n   -    Tại chỗ   : Súc họng bằng dung dịch sát khuẩn, dùng thuốc giảm đau họng.\n2.    Điều trị phẫu thuật   :\n   - Phẫu thuật cắt amidan có thể được chỉ định trong trường hợp viêm amidan tái phát nhiều lần (hơn 5 lần/năm) hoặc gây khó thở.\n\n" +
      "Biến chứng:\nViêm amidan nếu không được điều trị có thể xảy ra các biến chứng như:\n-    Viêm xoang   .\n-    Viêm tai giữa   .\n-    Viêm khí phế quản   .\n-    Nhiễm khuẩn huyết   , viêm nội tâm mạc.\n\n" +
      "Phòng ngừa:\n-    Giữ vệ sinh cá nhân   : Rửa tay thường xuyên, tránh tiếp xúc gần với người bệnh.\n-    Nâng cao sức đề kháng    qua chế độ ăn uống hợp lý và tập thể dục đều đặn.\n\n" +
      "Viêm amidan có thể gây ra nhiều khó chịu, nhưng nếu được phát hiện và điều trị kịp thời, người bệnh có thể hồi phục nhanh chóng và không gặp biến chứng nghiêm trọng. Nếu bạn có triệu chứng nghi ngờ viêm amidan, hãy đến bác sĩ để được tư vấn và điều trị kịp thời.",
    "viêm họng":
      "Dạ, viêm họng là một tình trạng viêm nhiễm của niêm mạc họng, thường xảy ra do nhiều nguyên nhân khác nhau, chủ yếu là do virus hoặc vi khuẩn. Dưới đây là một số thông tin chi tiết về bệnh viêm họng:\n\n" +
      "Nguyên nhân:\n1.    Nhiễm virus   : Đây là nguyên nhân phổ biến nhất gây viêm họng, như virus cúm, virus cảm lạnh, hoặc virus Epstein-Barr.\n2.    Nhiễm vi khuẩn   : Vi khuẩn như    Streptococcus nhóm A    có thể gây viêm họng và có thể làm bệnh trở nên nghiêm trọng hơn.\n3.    Tác nhân kích thích   : Khói thuốc, ô nhiễm không khí, hoặc nước uống nóng có thể gây viêm họng.\n4.    Dị ứng   : Dị ứng với bụi, phấn hoa, hoặc hóa chất cũng có thể gây viêm.\n\n" +
      "Triệu chứng:\nCác triệu chứng của viêm họng có thể bao gồm:\n-    Đau họng   : Cảm giác đau, rát hoặc vướng trong họng.\n-    Khó nuốt   : Đau mỗi khi nuốt nước bọt hoặc thức ăn.\n-    Ho   : Thường là ho khan nhưng có thể trở thành ho có đờm.\n-    Sốt nhẹ   : Một số trường hợp có thể sốt cao.\n-    Hơi thở hôi   : Do viêm và tích tụ chất nhầy trong họng.\n-    Ngứa cổ   : Cảm giác ngứa hoặc khô rát ở cổ họng.\n-    Sưng hạch bạch huyết   : Hạch bạch huyết ở cổ có thể sưng và đau.\n\n" +
      "Chẩn đoán:\nĐể chẩn đoán viêm họng, bác sĩ có thể thực hiện:\n-    Khám lâm sàng   : Kiểm tra họng và các triệu chứng thực thể.\n-    Xét nghiệm nhanh   : Đối với nghi ngờ nhiễm vi khuẩn, có thể được chỉ định xét nghiệm để xác định tác nhân gây bệnh, đặc biệt là Streptococcus.\n\n" +
      "Điều trị:\n1.    Điều trị triệu chứng   : Sử dụng thuốc giảm đau, thuốc hạ sốt như paracetamol hoặc ibuprofen giúp giảm triệu chứng.\n2.    Kháng sinh   : Khi nguyên nhân là do vi khuẩn, thuốc kháng sinh có thể được chỉ định.\n3.    Thực hiện biện pháp tự chăm sóc   : Nghỉ ngơi, giữ ấm cổ, uống đủ nước và ăn thực phẩm mềm để dễ nuốt.\n\n" +
      "Biến chứng:\nNếu không được điều trị, viêm họng có thể dẫn đến các biến chứng như:\n-    Viêm amidan   .\n-    Viêm xoang   .\n-    Viêm tai giữa   .\n-    Nhiễm trùng huyết    trong trường hợp nặng.\n\n" +
      "Phòng ngừa:\n-    Rửa tay thường xuyên    để giảm nguy cơ nhiễm trùng.\n-    Tránh tiếp xúc với người bệnh   .\n-    Giữ nhà cửa sạch sẽ và thoáng khí   .\n-    Tăng cường hệ miễn dịch    bằng chế độ ăn uống hợp lý.\n\n" +
      "Viêm họng thường là một bệnh có thể tự khỏi, nhưng nếu triệu chứng kéo dài hoặc trở nên nghiêm trọng, bạn nên đến gặp bác sĩ để được chẩn đoán và điều trị kịp thời.",
    "thủy đậu":
      "Dạ, bệnh thủy đậu (Varicella) là một bệnh truyền nhiễm do virus    Varicella-Zoster    gây ra, đặc trưng bởi các nốt phỏng nước trên da, sốt và triệu chứng nhiễm trùng hô hấp. Dưới đây là thông tin chi tiết về bệnh thủy đậu:\n\n" +
      "Nguyên nhân:\nBệnh thủy đậu do virus    Varicella-Zoster   , thuộc họ Herpesviridae. Virus này rất dễ lây lan, chủ yếu qua đường hô hấp khi hắt hơi, ho, hoặc tiếp xúc trực tiếp với dịch từ các nốt phỏng.\n\n" +
      "Triệu chứng:\n-    Giai đoạn khởi phát   : Có thể có sốt nhẹ, mệt mỏi, và cảm giác khó chịu.\n-    Phát ban   : Xuất hiện sau 1-2 ngày từ khi sốt. Ban đầu là những nốt đỏ nhỏ, sau đó chuyển thành mụn nước, và cuối cùng là vết loét h crusty. Những mụn nước này có thể xuất hiện ở khắp nơi trên cơ thể, bao gồm mặt, đầu, và cả trong miệng.\n-    Ngứa   : Nốt phỏng thường gây ngứa dai dẳng.\n\n" +
      "Chẩn đoán:\n-    Lâm sàng   : Chẩn đoán thường dựa vào triệu chứng lâm sàng điển hình và sự xuất hiện của phát ban.\n-    Cận lâm sàng   : Trong một số trường hợp, có thể cần xét nghiệm máu để xác định hiện diện của kháng thể Varicella-Zoster hay virus.\n\n" +
      "Điều trị:\n-    Điều trị triệu chứng   : Sử dụng thuốc hạ sốt như paracetamol để giảm sốt và đau. Tránh dùng aspirin vì có thể gây hội chứng Reye ở trẻ em.\n-    Giảm ngứa   : Sử dụng thuốc chống dị ứng hay các loại kem giảm ngứa.\n-    Chăm sóc vết thương   : Giữ cho các nốt phỏng sạch sẽ và tránh gãi để ngăn ngừa nhiễm trùng.\n\n" +
      "Biến chứng:\nMặc dù bệnh thủy đậu thường nhẹ nhàng, nhưng có thể gây ra một số biến chứng như:\n-    Nhiễm trùng thứ cấp do vi khuẩn    ở các nốt phỏng.\n-    Viêm phổi    do virus, nguy hiểm hơn ở người lớn và người có hệ miễn dịch yếu.\n-    Viêm não   , một biến chứng hiếm gặp.\n\n" +
      "Phòng ngừa:\n-    Tiêm vắc xin   : Vắc xin thủy đậu là phương pháp hiệu quả nhất để ngăn ngừa bệnh. Vắc xin này thường được tiêm cho trẻ em từ 12 tháng đến 15 tháng tuổi và 4 đến 6 tuổi.\n-    Hạn chế tiếp xúc   : Tránh để trẻ em tiếp xúc với người nhiễm virus trong thời gian bùng phát dịch.\n\n" +
      "Bệnh thủy đậu là một bệnh phổ biến ở trẻ em nhưng có thể xảy ra ở người lớn. Nếu bạn hoặc người thân có triệu chứng nghi ngờ bệnh thủy đậu, hãy liên hệ với bác sĩ để được tư vấn và điều trị kịp thời.",
    "mỏi mắt":
      "Dạ, mỏi mắt là một triệu chứng phổ biến và thường gặp trong cuộc sống hàng ngày, đặc biệt là ở những người phải làm việc với máy tính hoặc các thiết bị điện tử trong thời gian dài. Dưới đây là một số thông tin chi tiết về nguyên nhân, triệu chứng, chẩn đoán và cách điều trị mỏi mắt:\n\n" +
      "Nguyên nhân:\n1.    Sử dụng thiết bị điện tử   : Nhìn chằm chằm vào màn hình máy tính, điện thoại, hoặc máy tính bảng trong thời gian dài mà không nghỉ ngơi có thể gây căng thẳng cho mắt.\n2.    Thiếu ánh sáng   : Làm việc trong môi trường thiếu sáng hoặc quá sáng cũng có thể làm cho mắt trở nên mệt mỏi.\n3.    Cận thị, viễn thị hoặc loạn thị   : Các vấn đề về thị lực không được điều chỉnh có thể dẫn đến mỏi mắt.\n4.    Khô mắt   : Do thiếu nước mắt hoặc sử dụng kính áp tròng trong thời gian dài có thể gây khó chịu và mỏi mắt.\n5.    Căng thẳng   : Căng thẳng tâm lý cũng có thể gây ra căng thẳng cho mắt.\n\n" +
      "Triệu chứng:\n-    Cảm giác nặng nề   , khó chịu hoặc mệt mỏi ở mắt.\n-    Đỏ mắt   , khô hoặc chảy nước mắt.\n-    Nhìn thấy mờ    hoặc cảm giác nhòe khi tập trung.\n-    Đau đầu    hoặc đau vùng quanh mắt.\n-    Giảm khả năng tập trung    vào các đối tượng gần.\n\n" +
      "Chẩn đoán:\nĐể chẩn đoán mỏi mắt, bác sĩ có thể:\n-    Khám mắt toàn diện   , bao gồm việc kiểm tra thị lực và sự điều tiết của mắt.\n-    Hỏi về lịch sử sử dụng thiết bị điện tử    và các triệu chứng khác liên quan.\n\n" +
      "Điều trị:\n1.    Nghỉ ngơi cho mắt   : Thực hiện quy tắc 20-20-20: mỗi 20 phút, nhìn ra xa khoảng 20 feet (6 mét) trong ít nhất 20 giây.\n2.    Sử dụng thuốc nhỏ mắt   : Nếu mắt bị khô, có thể sử dụng thuốc nhỏ mắt nhân tạo để giữ ẩm.\n3.    Điều chỉnh môi trường làm việc   : Đảm bảo đủ ánh sáng, nên dùng đèn bàn thay vì chỉ làm việc dưới ánh sáng yếu.\n4.    Kiểm tra và điều chỉnh thị lực   : Nếu có vấn đề về kính hoặc thuốc kính, cần được kiểm tra và điều chỉnh kịp thời.\n5.    Đeo kính chống ánh sáng xanh   : Sử dụng kính lọc ánh sáng xanh khi làm việc với máy tính có thể giảm mỏi mắt.\n\n" +
      "Phòng ngừa:\n- Tạo thói quen nghỉ ngơi cho mắt khi sử dụng thiết bị điện tử liên tục.\n- Điều chỉnh độ sáng màn hình và độ tương phản cho phù hợp.\n- Duy trì độ ẩm cho mắt bằng cách uống đủ nước và sử dụng máy tạo độ ẩm khi cần.\n\n" +
      "Nếu triệu chứng mỏi mắt không giảm hoặc kèm theo các triệu chứng nghiêm trọng khác, bạn nên tham khảo ý kiến bác sĩ để có hướng điều trị và chăm sóc phù hợp.",
    "nhức xương khớp vào mùa đông":
      "Dạ, nhức xương khớp vào mùa đông là một triệu chứng thường gặp ở nhiều người, đặc biệt là những người có tiền sử bệnh về khớp hoặc xương. Thời tiết lạnh và ẩm ướt có thể làm tăng cảm giác đau và khó chịu. Dưới đây là một số thông tin chi tiết về nguyên nhân, triệu chứng, và cách điều trị nhức xương khớp vào mùa đông:\n\n" +
      "Nguyên nhân:\n1.    Thay đổi nhiệt độ   : Nhiệt độ lạnh có thể làm co thắt mạch máu, giảm tuần hoàn máu đến các khớp, dẫn đến cảm giác đau và cứng.\n2.    Độ ẩm   : Sự thay đổi độ ẩm cũng có thể làm tăng cảm giác đau ở các khớp.\n3.    Căng thẳng cơ bắp   : Khi thời tiết lạnh, cơ bắp có thể trở nên căng cứng, làm tăng áp lực lên các khớp, gây ra cảm giác đau đớn.\n4.    Bệnh lý nền   : Những người bị viêm khớp, thoái hóa khớp, hoặc các bệnh lý liên quan đến khớp khác thường nhạy cảm hơn với sự thay đổi của thời tiết.\n\n" +
      "Triệu chứng:\n-    Cảm giác đau nhức    ở các khớp, có thể kèm theo sưng hoặc cứng khớp.\n-    Cảm giác nóng rát    hoặc nhức nhói khi di chuyển hoặc gắng sức.\n-    Khó khăn trong việc di chuyển    hoặc thực hiện các hoạt động hàng ngày.\n\n" +
      "Chẩn đoán:\nĐể chẩn đoán chính xác nguyên nhân gây đau khớp, bác sĩ có thể:\n-    Thực hiện một cuộc kiểm tra lâm sàng   , bao gồm việc hỏi về tiền sử bệnh lý và triệu chứng.\n-    Xét nghiệm hình ảnh    như X-quang hoặc MRI để xác định tình trạng khớp.\n-    Công thức máu    để kiểm tra các dấu hiệu viêm hoặc các vấn đề sức khỏe khác.\n\n" +
      "Điều trị:\n1.    Điều trị tại chỗ   :\n   - Sử dụng thuốc giảm đau không kê đơn như paracetamol hoặc ibuprofen.\n   - Sử dụng nhiệt hoặc lạnh (chườm nóng hoặc lạnh) để giảm đau và sưng.\n2.    Thay đổi lối sống   :\n   - Tập thể dục nhẹ nhàng, như đi bộ hoặc yoga, để giữ cho khớp linh hoạt và khỏe mạnh.\n   - Nên giữ ấm cho cơ thể, đặc biệt là các khớp bị đau.\n3.    Sử dụng thuốc   :\n   - Trong trường hợp đau kéo dài hoặc nặng, có thể cần dùng thuốc giảm đau theo kê đơn.\n   - Những bệnh nhân có vấn đề viêm khớp có thể cần điều trị lâu dài bằng thuốc điều trị đặc hiệu.\n\n" +
      "Phòng ngừa:\n-    Giữ ấm cho cơ thể    trong những ngày lạnh bằng cách mặc đủ quần áo.\n-    Tăng cường chế độ ăn uống    với thực phẩm giàu omega-3 và vitamin D để hỗ trợ sức khỏe khớp.\n-    Tránh các hoạt động thể chất    gây áp lực lớn lên các khớp.\n\n" +
      "Nếu tình trạng đau khớp kéo dài hoặc nghiêm trọng, bạn nên tham khảo ý kiến bác sĩ để có hướng điều trị và chăm sóc phù hợp.",
    "nhức xương khớp":
      "Dạ, nhức xương khớp là một tình trạng phổ biến và có thể xuất phát từ nhiều nguyên nhân khác nhau. Các triệu chứng nhức xương khớp thường dễ nhận diện và có thể ảnh hưởng đáng kể đến chất lượng cuộc sống của người bệnh. Dưới đây là một số thông tin về nguyên nhân, triệu chứng, chẩn đoán và cách điều trị nhức xương khớp.\n\n" +
      "Nguyên nhân:\n1.    Viêm khớp   : Có nhiều dạng viêm khớp khác nhau như viêm khớp dạng thấp, viêm khớp gout, viêm khớp tự phát ở trẻ em.\n2.    Thoái hóa khớp   : Là sự lão hóa tự nhiên của các khớp, dẫn đến cơn đau và giảm khả năng vận động.\n3.    Chấn thương   : Các chấn thương ở đầu gối, cổ tay, hoặc các khu vực khác có thể gây đau đớn.\n4.    Nhiễm trùng   : Một số bệnh lý nhiễm trùng có thể ảnh hưởng đến khớp, gây ra tình trạng viêm và đau.\n5.    Bệnh lý nền   : Những người mắc bệnh tự miễn dịch hoặc bệnh nội tiết có thể dễ bị nhức xương khớp hơn.\n\n" +
      "Triệu chứng:\n-    Cảm giác đau và cứng khớp   , đặc biệt là vào buổi sáng hoặc sau khi ngồi lâu.\n-    Sưng và nóng    ở các khớp bị ảnh hưởng.\n-    Khó khăn trong việc cử động và vận động   .\n-    Tiếng kêu khi di chuyển khớp    (crepitus).\n\n" +
      "Chẩn đoán:\nĐể chẩn đoán nhức xương khớp, bác sĩ thường thực hiện:\n-    Khám lâm sàng   : Đánh giá triệu chứng và kiểm tra phạm vi chuyển động của khớp.\n-    Xét nghiệm hình ảnh   : Như X-quang, MRI để xác định tình trạng của khớp.\n-    Xét nghiệm máu   : Để loại trừ các bệnh lý khác hoặc kiểm tra dấu hiệu viêm.\n\n" +
      "Điều trị:\n1.    Điều trị nội khoa   :\n   - Thuốc giảm đau: Như paracetamol hoặc NSAIDs (ibuprofen).\n   - Thuốc kháng viêm: Giúp giảm viêm và đau.\n   - Thuốc châm cứu hoặc thuốc tiêm: Trong một số trường hợp, bác sĩ có thể đề xuất tiêm mẹ corticoid để làm giảm viêm.\n2.    Vật lý trị liệu   :\n   - Thực hiện các bài tập giúp tăng cường sức mạnh cho cơ và cải thiện khả năng vận động.\n3.    Thay đổi lối sống   :\n   - Giữ trọng lượng cơ thể ổn định, chế độ ăn uống lành mạnh và tập thể dục đều đặn để duy trì sức khỏe xương khớp.\n4.    Phẫu thuật   : Trong trường hợp nặng, phẫu thuật có thể được xem xét để thay thế hoặc sửa chữa khớp.\n\n" +
      "Nếu bạn gặp phải tình trạng nhức xương khớp kéo dài hoặc có các triệu chứng nghiêm trọng khác, bạn nên tham khảo ý kiến bác sĩ để được chẩn đoán và điều trị kịp thời.",
  };

  for (const key in responses) {
    if (inputLower.includes(key)) {
      return responses[key];
    }
  }

  return "Tôi chưa nhận diện được triệu chứng này. Bạn có thể mô tả rõ hơn hoặc liên hệ tới số điện thoại 0356241423. Để được hỗ trợ nhanh nhất";
}

export default analyzeInput;
