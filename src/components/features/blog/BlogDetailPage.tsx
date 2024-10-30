import { Section } from '@/components/shared/layouts'
import { Image } from '@mantine/core'

export const BlogDetailPage = () => {
  return (
    <Section
      titleClassName="text-[#C80D13] text-3xl"
      title="Du lịch trên du thuyền 5 sao ngắm biển"
    >
      <div className="flex flex-col gap-4">
        <p className="font-bold text-xl">
          Icon of the Seas - một thành phố nổi giữa đại dương! Với chiều dài
          365m và sức chưa lên đến 10.000 người, con tàu du lịch lớn nhất thế
          giới này đã chính thức ra mắt và hứa hẹn sẽ mang đến những trải nghiệm
          du lịch xa hoa chưa từng có.
        </p>
        <p className="text-[#666363] font-bold text-xl">21/10/2024</p>

        <div className="flex flex-col gap-4">
          <Image
            src="/images/blog/b-1.jpeg"
            className="w-full h-auto max-h-[500px]"
          />
          <p>
            Icon of the Seas - một thành phố nổi giữa đại dương! Với chiều dài
            365m và sức chứa lên đến 10.000 người, con tàu du lịch lớn nhất thế
            giới này đã chính thức ra mắt và hứa hẹn sẽ mang đến những trải
            nghiệm du lịch xa hoa chưa từng có. Từ công viên nước quy mô khổng
            lồ đến các nhà hàng sang trọng, Icon of the Seas sẽ khiến bạn ngạc
            nhiên với những tiện nghi và dịch vụ đẳng cấp thế giới.
          </p>
          <p>
            Icon of the Seas, biểu tượng mới của ngành du lịch biển đến từ tập
            đoàn Royal Caribbean, đã chính thức ra khơi. Với chiều dài lên tới
            365m và lượng giãn nước 250.800 tấn, Icon of the Seas hiện lên như
            một thành phố nổi giữa đại dương, mang đến những dịch vụ giải trí xa
            hoa và sang trọng bậc nhất. Từ những bể bơi vô cực, đường trượt nước
            xoắn ốc ngoạn mục đến những khu vườn nhiệt đới xanh mát, đánh thức
            mọi giác quan của du khách. {' '}
          </p>

          <Image
            src="/images/blog/b-1.jpeg"
            className="w-full h-auto max-h-[500px]"
          />
          <p>
            Icon of the Seas - một thành phố nổi giữa đại dương! Với chiều dài
            365m và sức chứa lên đến 10.000 người, con tàu du lịch lớn nhất thế
            giới này đã chính thức ra mắt và hứa hẹn sẽ mang đến những trải
            nghiệm du lịch xa hoa chưa từng có. Từ công viên nước quy mô khổng
            lồ đến các nhà hàng sang trọng, Icon of the Seas sẽ khiến bạn ngạc
            nhiên với những tiện nghi và dịch vụ đẳng cấp thế giới.
          </p>
          <p>
            Icon of the Seas, biểu tượng mới của ngành du lịch biển đến từ tập
            đoàn Royal Caribbean, đã chính thức ra khơi. Với chiều dài lên tới
            365m và lượng giãn nước 250.800 tấn, Icon of the Seas hiện lên như
            một thành phố nổi giữa đại dương, mang đến những dịch vụ giải trí xa
            hoa và sang trọng bậc nhất. Từ những bể bơi vô cực, đường trượt nước
            xoắn ốc ngoạn mục đến những khu vườn nhiệt đới xanh mát, đánh thức
            mọi giác quan của du khách. 
          </p>
        </div>
      </div>
    </Section>
  )
}
